import { action, makeObservable, observable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { ISpendingStore } from './interfaces/interfaces';

class SpendingStore implements ISpendingStore {
    spending = 0;

    constructor() {
        makeObservable(this, {
            spending    : observable,
            addSpending : action,
        });
    }

    addSpending(newSpending: number): void {
        this.spending = this.spending + newSpending;
        const updatedBalance = balanceStore.moneyAccount - newSpending;

        balanceStore.updateCashAccount(updatedBalance);
    }
}

export const spendingStore = new SpendingStore();
