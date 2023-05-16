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

    setBalanceFromDB(balance:number) {
        this.moneyAccount = balance;
    }
    updateAfterDeleteOperation(sum:number) {
        this.moneyAccount -= sum;
    }
}

export const balanceStore = new BalanceStore();
