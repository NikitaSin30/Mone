import { IOperationApi } from 'api/operationsApi/interfaces';
import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';
import { userStore } from 'shared/store/userStore/UserStore';
import { IOperationSevice } from './interfaces';
import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';


class OperationsService implements IOperationSevice {

    constructor(private operationsApi:IOperationApi) {
        this.operationsApi = operationsApi;
    }

    async deleteOperation(id:string) {
        const operation = this.getOperation(id);

        try {
            await this.operationsApi.deleteOperation(id,userStore.idUser);
            this.deleteFromStore(operation);
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

    private deleteFromStore(operation:TAllOperations) {
        if ('income' in operation) incomeStore.deleteOperation(operation);
        if ('spending' in operation) spendingStore.deleteOperation(operation);
        if ('accumulation' in operation) accumulationStore.deleteOperation(operation);
    }
}


export default OperationsService;
