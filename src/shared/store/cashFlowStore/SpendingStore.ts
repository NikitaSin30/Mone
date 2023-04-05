import { action, makeObservable, observable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { ISpendingStore } from './interfaces';
import { ISpendingOperation } from './interfaces';

class SpendingStore implements ISpendingStore {
    spendingOperations: ISpendingOperation[] = [];
    spending = 0;

    constructor() {
        makeObservable(this, {
            spending          : observable,
            addSpending       : action,
            getSpendingWithDB : action,
        });
    }

    addSpending(operation: ISpendingOperation) {
        this.spending = this.spending + operation.spending ;
        const updatedBalance = balanceStore.moneyAccount - operation.spending;

        balanceStore.updateCashAccount(updatedBalance);
    }
    getSpendingWithDB(spending: number) {
        this.spending = spending;
    }
}

export const spendingStore = new SpendingStore();
