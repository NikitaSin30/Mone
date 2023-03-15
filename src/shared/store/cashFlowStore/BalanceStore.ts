import { makeObservable, observable } from 'mobx';
import { incomeStore } from './IncomeStore';
import { spendingStore } from './SpendingStore';
import { accumulationStore } from './AccumulationStore';
import { IBalanceStore } from './interfaces/interfaces';



export class BalanceStore implements IBalanceStore {
    moneyAccount:number;
    income: number;
    accumulation: number;
    spending: number;

    constructor(income: any, spending: any, accumulation: any) {
        this.income = income;
        this.accumulation = accumulation;
        this.spending = spending;
        this.moneyAccount = this.income - this.spending - this.accumulation;

        makeObservable(this, {
            moneyAccount : observable,

        });
    }

    updateCashAccount(): void {
        this.moneyAccount = this.income - this.spending - this.accumulation;
    }
}
export const balanceStore = new BalanceStore(incomeStore,spendingStore, accumulationStore);
