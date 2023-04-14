import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';
import { IAccumulationService } from './interfaces';
import { IFormAccumulation } from '../interfaces';



class AccumulationService implements IAccumulationService {

    async addAccumulation({ accumulation }: IFormAccumulation, showModalError: () => void, switchShowModal: () => void) {
        if (balanceStore.moneyAccount < accumulation) return showModalError();
        const createdOperation = this.createOperation(accumulation);

        try {
            const { message } =  await cashFlowApi.addAccumulation(userStore.user._id, createdOperation);

            console.log(message);

            accumulationStore.addAccumulation(createdOperation);
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
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
