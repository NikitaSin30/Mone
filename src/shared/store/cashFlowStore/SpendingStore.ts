import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { ISpendingStore } from './interfaces/interfaces';
import { ISpendingOperation } from './interfaces/interfaces';

class SpendingStore implements ISpendingStore {
    spendingOperations: ISpendingOperation[] = [];
    spending:number = 0;

    constructor() {
          makeAutoObservable(this);
    }

    addSpending(operation: ISpendingOperation): void {
        this.spending = this.spending + operation.spending ;
        const updatedBalance = balanceStore.moneyAccount - operation.spending;
        this.spendingOperations.push(operation)
        
        balanceStore.updateCashAccount(updatedBalance);
    }
    setSpendingWithDB(spending: number, operations:ISpendingOperation[]): void {
        this.spending = spending;
    }
}

export const spendingStore = new SpendingStore();
