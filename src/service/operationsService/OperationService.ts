import { IOperationApi } from 'api/operationsApi/interfaces';
import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';
import { userStore } from 'shared/store/userStore/UserStore';
import { IOperationSevice } from './interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { OPERATION_ACCUMULATION, OPERATION_INCOME,OPERATION_SPENDING } from 'shared/service/factory/constants';
import { IStrategyContext } from './strategy/interfaces';
import { StrategyAccumulation, StrategyIncome, StrategySpending } from './strategy/StrategyOperation';



class OperationsService implements IOperationSevice {

    constructor(private operationsApi:IOperationApi, private strategyContext : IStrategyContext) {
        this.operationsApi = operationsApi;
        this.strategyContext = strategyContext;
    }

    async deleteOperation(id:string) {
        const operation = this.getOperation(id);

        try {
            const typeOperation = this.defineTypeOperation(operation);

            await this.operationsApi.deleteOperation(id,userStore.idUser,typeOperation);
            this.updateStore(operation);
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

    private defineTypeOperation(operation:TAllOperations) {
        if (OPERATION_INCOME in operation) return OPERATION_INCOME;
        if (OPERATION_SPENDING in operation) return OPERATION_SPENDING;
        if (OPERATION_ACCUMULATION in operation) return OPERATION_ACCUMULATION;

        throw new Error('Приносим извенение. Произошла ошибка');

    }

    private updateStore(operation:TAllOperations) {

        if (OPERATION_INCOME in operation) {
            this.strategyContext.setStrategy(new StrategyIncome());
            const { strategy } = this.strategyContext;

            strategy.upadateBalance(operation.income);
            strategy.deleteOperation(operation);
        }
        else if (OPERATION_SPENDING in operation) {
            this.strategyContext.setStrategy(new StrategySpending());
            const { strategy } = this.strategyContext;

            strategy.upadateBalance(operation.spending);
            strategy.deleteOperation(operation);
        }
        else if (OPERATION_ACCUMULATION in operation) {
            this.strategyContext.setStrategy(new StrategyAccumulation());
            const { strategy } = this.strategyContext;

            strategy.upadateBalance(operation.accumulation);
            strategy.deleteOperation(operation);
        }
    }
}


export default OperationsService;
