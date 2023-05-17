import { IAccumulationOperation } from 'features/add-accumulation/service/interfaces';
import { ISpendingOperation } from 'features/add-spending/service/interfaces';
import { OPERATION_ACCUMULATION, OPERATION_INCOME, OPERATION_SPENDING } from 'shared/service/factory/constants';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IAccumulationOperationWithID } from 'shared/store/cashFlowStore/acuumulationStore/interfaces';
import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { IIncomeOperationWithID } from 'shared/store/cashFlowStore/incomeStore/interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { ISpendingOperationWithID } from 'shared/store/cashFlowStore/spendingStore/interfaces';
import { IStrategy, IStrategyContext } from './interfaces';



export class StrategyIncome implements IStrategy {
    upadateBalance(sum:number) {
        incomeStore.updateAfterDeleteOperation(sum);
        balanceStore.updateAfterDeleteOperation(sum);
    }

    deleteOperation<T>(operation:T) {
        incomeStore.deleteOperation(operation as IIncomeOperationWithID);
        operationsStore.deleteOperation(operation as IIncomeOperationWithID );
    }
}

export class StrategySpending implements IStrategy {
    upadateBalance(sum:number) {
        spendingStore.updateAfterDeleteOperation(sum);
        balanceStore.updateAfterDeleteOperation(sum);
    }

    deleteOperation<T>(operation:T) {
        spendingStore.deleteOperation(operation as ISpendingOperationWithID);
        operationsStore.deleteOperation(operation as ISpendingOperationWithID);


    }
}
export class StrategyAccumulation implements IStrategy {
    upadateBalance(sum:number) {
        accumulationStore.updateAfterDeleteOperation(sum);
        balanceStore.updateAfterDeleteOperation(sum);
    }

    deleteOperation<T>(operation:T) {
        accumulationStore.deleteOperation(operation as IAccumulationOperationWithID);
        operationsStore.deleteOperation(operation as IAccumulationOperationWithID);
    }
}


export class StrategyContext implements IStrategyContext {
    strategy:IStrategy;

    setStrategy(newStrategy:IStrategy) {
        this.strategy = newStrategy;
    }

}
