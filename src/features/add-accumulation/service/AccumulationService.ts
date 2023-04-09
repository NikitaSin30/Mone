import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';
import { IAccumulationService } from './interfaces';
import { IFormAccumulation } from '../interfaces';



class AccumulationService implements IAccumulationService {

    async addAccumulation({ accumulation }: IFormAccumulation, showModalError: () => void, switchShowModal: () => void) {
        if (balanceStore.moneyAccount < accumulation) return showModalError();
        const createdOperation = this.createOperation(accumulation);

        try {
            const response =  await cashFlowApi.addAccumulation(userStore.user._id, createdOperation);

            //    ===== кидать текст в ui

            console.log(response.message);

            accumulationStore.addAccumulation(createdOperation);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
        finally {
            switchShowModal();
        }
    }
    createOperation(accumulation : number) {
        return {
            accumulation : accumulation,
            date         : new Date(),
        };
    }
}

export const accumulationService = new AccumulationService();
