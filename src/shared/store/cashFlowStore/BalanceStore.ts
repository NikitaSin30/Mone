import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { IBalanceStore } from './interfaces/interfaces';



export class BalanceStore implements IBalanceStore {
    moneyAccount = 0;

    constructor() {
       makeAutoObservable(this);

    }

    updateCashAccount(newBalance: number ): void {
        this.moneyAccount = newBalance;
    }

    setBalanceWithDB(sum:number):void {
        this.moneyAccount = sum;
    }
}

export const balanceStore = new BalanceStore();
