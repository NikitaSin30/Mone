import { IOperationApi } from 'api/operationsApi/interfaces';
import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';
import { userStore } from 'shared/store/userStore/UserStore';
import { IOperationSevice } from './interfaces';
import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { OPERATION_ACCUMULATION, OPERATION_INCOME,OPERATION_SPENDING } from 'shared/service/factory/constants';
import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';

class OperationsService implements IOperationSevice {

    constructor(private operationsApi:IOperationApi) {
        this.operationsApi = operationsApi;
    }

    async deleteOperation(id:string) {
        const operation = this.getOperation(id);

        try {
            const typeOperation = this.defineTypeOperation(operation);

            await this.operationsApi.deleteOperation(id,userStore.idUser,typeOperation);
            this.deleteOperationFromStore(operation);
            this.updateBalance(operation);
        }
        catch (error) {
            throw error;
        }
    }

    private getOperation(id:string) {
        const operation = operationsStore.allOperations.find(operation => operation.id === id);

        if (!operation) throw new Error('Некорректные даныее');

        return operation;

    }

    private deleteOperationFromStore(operation:TAllOperations) {
        if (OPERATION_INCOME in operation) return incomeStore.deleteOperation(operation);
        if (OPERATION_SPENDING in operation) return spendingStore.deleteOperation(operation);
        if (OPERATION_ACCUMULATION in operation) return accumulationStore.deleteOperation(operation);

        throw new Error('Приносим извенение. Произошла ошибка');
    }

    private defineTypeOperation(operation:TAllOperations) {
        if (OPERATION_INCOME in operation) return OPERATION_INCOME;
        if (OPERATION_SPENDING in operation) return OPERATION_SPENDING;
        if (OPERATION_ACCUMULATION in operation) return OPERATION_ACCUMULATION;

        throw new Error('Приносим извенение. Произошла ошибка');

    }
    private updateBalance(operation:TAllOperations) {

        if (OPERATION_INCOME in operation) {
            incomeStore.updateAfterDeleteOperation(operation.income);
            balanceStore.updateAfterDeleteOperation(operation.income);
        }
        else if (OPERATION_SPENDING in operation) {
            spendingStore.updateAfterDeleteOperation(operation.spending);
            balanceStore.updateAfterDeleteOperation(operation.spending);
        }
        else if (OPERATION_ACCUMULATION in operation) {
            accumulationStore.updateAfterDeleteOperation(operation.accumulation);
            balanceStore.updateAfterDeleteOperation(operation.accumulation);
        }
    }
}


export default OperationsService;
