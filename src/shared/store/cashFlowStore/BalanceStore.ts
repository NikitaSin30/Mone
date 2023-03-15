import { makeObservable, observable } from 'mobx';
import { IBalanceStore } from './interfaces/interfaces';



export class BalanceStore implements IBalanceStore {
    moneyAccount = 0;

    constructor() {
        makeObservable(this, {
            moneyAccount : observable,

        });
    }

    updateCashAccount(newBalance: number ): void {
        this.moneyAccount = newBalance;
    }
}

export const balanceStore = new BalanceStore();
