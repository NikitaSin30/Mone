import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';
import { IAccumulationService } from './interfaces';
import { IFormAccumulation } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';



class AccumulationService implements IAccumulationService {

    async addAccumulation({ accumulation }: IFormAccumulation) {
        if (balanceStore.moneyAccount < accumulation) throw new Error('У вас нет данной суммы на счёте ');
        const createdOperation : IAccumulationOperation = this.createOperation(accumulation);

        try {
            await cashFlowApi.addAccumulation(userStore.user._id, createdOperation);

            accumulationStore.addAccumulation(createdOperation);
            operationsStore.addOperation(createdOperation);

        }
        catch (error) {
            throw error;
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
