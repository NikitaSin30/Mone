import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { IAccumulationService } from './interfaces/interfaces';


class AccumulationService implements IAccumulationService {

    async addAccumulation(newAccumulation: number, showModalError: () => void, switchShowModal: () => void) {
        if (balanceStore.moneyAccount < newAccumulation) return showModalError();
        const createdOperation = this.createOperation(newAccumulation)
        console.log(createdOperation);

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
            date      : new Date(),
        };
}}

export const accumulationService = new AccumulationService();
