import { makeAutoObservable } from 'mobx';
import { IBalanceStore } from './interfaces';



export class BalanceStore implements IBalanceStore {
    moneyAccount = 0;

    constructor() {
        makeAutoObservable(this);
    }

    updateCashAccount(newBalance: number ) {
        this.moneyAccount = newBalance;
    }

    setBalanceWithDB(sum:number) {
        this.moneyAccount = sum;
    }
    setBalance(balance:number) {
        this.moneyAccount = balance;
    }
}

export const balanceStore = new BalanceStore();
