import {  makeAutoObservable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { ISpendingStore } from './interfaces/interfaces';
import { ISpendingOperation } from './interfaces/interfaces';

class SpendingStore implements ISpendingStore {
    spendingOperations: ISpendingOperation[] = [];
    spending = 0;

    constructor() {
      makeAutoObservable(this)
    }

    addSpending(operation: ISpendingOperation): void {
        this.spending = this.spending + operation.spending ;
        const updatedBalance = balanceStore.moneyAccount - operation.spending;

        balanceStore.updateCashAccount(updatedBalance);
    }
    getSpendingWithDB(spending: number): void {
        this.spending = spending;
    }
    setSpending(spending:number, spendingOperations : ISpendingOperation[]){
        this.spending = spending
        this.spendingOperations = spendingOperations
    }

}

export const spendingStore = new SpendingStore();
