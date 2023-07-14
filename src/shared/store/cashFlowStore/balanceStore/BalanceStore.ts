import { makeAutoObservable } from 'mobx';
import { IBalanceStore } from '../interfaces';



export class BalanceStore implements IBalanceStore {
    public moneyAccount = 0;

    constructor() {
        makeAutoObservable(this);
    }

    public updateCashAccount(newBalance: number ) {
        this.moneyAccount = newBalance;
    }

    public setBalanceFromDB(balance:number) {
        this.moneyAccount = balance;
    }

}

export const balanceStore = new BalanceStore();
