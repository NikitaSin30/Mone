import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IAccumulationOperationWithID } from 'shared/store/cashFlowStore/acuumulationStore/interfaces';
import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { IIncomeOperationWithID } from 'shared/store/cashFlowStore/incomeStore/interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { ISpendingOperationWithID } from 'shared/store/cashFlowStore/spendingStore/interfaces';
import { IStrategy, IStrategyContext } from './interfaces';



export class StrategyIncome implements IStrategy {
    upadateBalance(sum:number, typeOperation:string) {
        incomeStore.updateAfterDeleteOperation(sum);
        balanceStore.updateAfterDeleteOperation(sum,typeOperation);
    }

    deleteOperation<T>(operation:T) {
        incomeStore.deleteOperation(operation as IIncomeOperationWithID);
        operationsStore.deleteOperation(operation as IIncomeOperationWithID );
    }
}

export class StrategySpending implements IStrategy {
    upadateBalance(sum:number,typeOperation:string) {
        spendingStore.updateAfterDeleteOperation(sum);
        balanceStore.updateAfterDeleteOperation(sum,typeOperation);
    }

    deleteOperation<T>(operation:T) {
        spendingStore.deleteOperation(operation as ISpendingOperationWithID);
        operationsStore.deleteOperation(operation as ISpendingOperationWithID);


    }
}
export class StrategyAccumulation implements IStrategy {
    upadateBalance(sum:number,typeOperation:string) {
        accumulationStore.updateAfterDeleteOperation(sum);
        balanceStore.updateAfterDeleteOperation(sum,typeOperation);
    }

    deleteOperation<T>(operation:T) {
        accumulationStore.deleteOperation(operation as IAccumulationOperationWithID);
        operationsStore.deleteOperation(operation as IAccumulationOperationWithID);
    }
}


export class StrategyUpdateStore implements IStrategyContext {
    strategy:IStrategy;

    setStrategy(newStrategy:IStrategy) {
        this.strategy = newStrategy;
    }

}
