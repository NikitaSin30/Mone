import { action, makeObservable, observable } from 'mobx';
import { IBalanceStore } from './interfaces';



export class BalanceStore implements IBalanceStore {
    moneyAccount = 0;

    constructor() {
        makeObservable(this, {
            moneyAccount      : observable,
            updateCashAccount : action,
            getBalanceWithDB  : action,
        });
    }

    updateCashAccount(newBalance: number ) {
        this.moneyAccount = newBalance;
    }

    getBalanceWithDB(sum:number) {
        this.moneyAccount = sum;
    }
}

export const balanceStore = new BalanceStore();
