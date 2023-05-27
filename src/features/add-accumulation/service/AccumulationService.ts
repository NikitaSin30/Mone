import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IAccumulationOperation, EOperationType } from 'shared/store/cashFlowStore/interfaces';
import { IAccumulationService } from './interfaces';
import { IFormAccumulation } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';



class AccumulationService implements IAccumulationService {

    async addAccumulation({ accumulation }: IFormAccumulation) {
        if (balanceStore.moneyAccount < accumulation) throw new Error('У вас нет данной суммы на счёте ');
        const operation : IAccumulationOperation = this.createOperation(accumulation);

        await cashFlowApi.addAccumulation(userStore.idUser, operation);

        accumulationStore.addAccumulation(operation);
        operationsStore.addOperation(operation);
    }

    createOperation(accumulation : number):IAccumulationOperation {
        return {
            accumulation : accumulation,
            type         : EOperationType.Accumulation,
            date         : new Date().toLocaleDateString(),
        };
    }
}

export const accumulationService = new AccumulationService();
