import { IOperationApi } from 'api/operationsApi/interfaces';
import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';
import { userStore } from 'shared/store/userStore/UserStore';
import { IOperationSevice } from './interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { OPERATION_ACCUMULATION, OPERATION_INCOME,OPERATION_SPENDING } from 'shared/service/factory/constants';
import { IStrategyContext } from './strategy/interfaces';
import { StrategyAccumulation, StrategyIncome, StrategySpending } from './strategy/StrategyOperation';




class OperationsService implements IOperationSevice {

    constructor(private operationsApi:IOperationApi, private strategyUpdateStore : IStrategyContext) {
        this.operationsApi = operationsApi;
        this.strategyUpdateStore = strategyUpdateStore;
    }

    async deleteOperation(id:string) {
        const operation = this.getOperation(id);

        try {
            const { typeOperation,sum } = this.defineTypeOperation(operation);

            await this.operationsApi.deleteOperation(userStore.idUser,id,typeOperation,sum);

            this.updateStore(operation,typeOperation);
        }
        catch (error) {
            throw error;
        }
    }

    private getOperation(id:string) {
        const operation = operationsStore.allOperations.find(operation => operation.id === id);

        if (!operation) throw new Error('приносим извенения. Произошла');

        return operation;

    }

    private defineTypeOperation(operation:TAllOperations):{typeOperation:string, sum:number} {
        if (OPERATION_INCOME in operation) {
            return {
                sum           : operation.income,
                typeOperation : OPERATION_INCOME,
            };
        }
        if (OPERATION_SPENDING in operation) {
            return {
                sum           : operation.spending,
                typeOperation : OPERATION_SPENDING,
            };
        }
        if (OPERATION_ACCUMULATION in operation) {
            return {
                sum           : operation.accumulation,
                typeOperation : OPERATION_ACCUMULATION,
            };
        };

        throw new Error('Приносим извенение. Произошла ошибка');

    }

    private updateStore(operation:TAllOperations,typeOperation:string) {

        if (OPERATION_INCOME in operation) {
            this.strategyUpdateStore.setStrategy(new StrategyIncome());
            const { strategy } = this.strategyUpdateStore;

            strategy.upadateBalance(operation.income,typeOperation);
            strategy.deleteOperation(operation);
        }
        else if (OPERATION_SPENDING in operation) {
            this.strategyUpdateStore.setStrategy(new StrategySpending());
            const { strategy } = this.strategyUpdateStore;

            strategy.upadateBalance(operation.spending,typeOperation);
            strategy.deleteOperation(operation);
        }
        else if (OPERATION_ACCUMULATION in operation) {
            this.strategyUpdateStore.setStrategy(new StrategyAccumulation());
            const { strategy } = this.strategyUpdateStore;

            strategy.upadateBalance(operation.accumulation,typeOperation);
            strategy.deleteOperation(operation);
        }
    }
}


export default OperationsService;
