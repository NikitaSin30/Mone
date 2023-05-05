import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';
import { IAccumulationService } from './interfaces';
import { IFormAccumulation } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';



class AccumulationService implements IAccumulationService {

    async addAccumulation({ accumulation }: IFormAccumulation, showModalError: () => void, switchShowModal: () => void) {
        if (balanceStore.moneyAccount < accumulation) return showModalError();
        const createdOperation : IAccumulationOperation = this.createOperation(accumulation);

        try {
            await cashFlowApi.addAccumulation(userStore.user._id, createdOperation);

            accumulationStore.addAccumulation(createdOperation);
            operationsStore.addOperation(createdOperation);

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
            date         : new Date().toLocaleDateString(),
        };
    }
}

export const accumulationService = new AccumulationService();
