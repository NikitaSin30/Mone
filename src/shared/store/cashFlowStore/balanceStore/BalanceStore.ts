import { makeAutoObservable } from 'mobx';
import { IBalanceStore } from '../interfaces';



export class BalanceStore implements IBalanceStore {
    moneyAccount = 0;

    constructor() {
        makeAutoObservable(this);
    }

    updateCashAccount(newBalance: number ) {
        this.moneyAccount = newBalance;
    }

    setBalance(balance:number) {
        this.moneyAccount = balance;
    }
}

export const balanceStore = new BalanceStore();
