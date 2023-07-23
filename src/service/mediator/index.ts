import { services } from 'service/ioC/ioc';
import { OPERATION_ACCUMULATION, OPERATION_INCOME, OPERATION_SPENDING } from 'shared/constants';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { TAllOperations } from 'types';


class MediatorOperations {

    public async delete(operationID:string) {
        const operation = operationsStore.getOperation(operationID);

        await this.callService(operation,operationID);
    }

    private async callService(operation:TAllOperations,operationID:string) {
        if (OPERATION_INCOME in operation) {
            return await services.income.delete(operationID);
        }
        if (OPERATION_ACCUMULATION in operation) {
            return await services.accumulation.delete(operationID);
        }
        if (OPERATION_SPENDING in operation) {
            return await services.spending.delete(operationID);
        }

        throw new Error('Промзошла ошибка');
    }


}

export const mediatorOperations = new MediatorOperations();
