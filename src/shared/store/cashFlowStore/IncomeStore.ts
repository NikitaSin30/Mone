import { action, makeObservable, observable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { IIncomeStore } from './interfaces/interfaces';



export class IncomeStore implements IIncomeStore {
    income = 0;

    constructor() {
        makeObservable(this, {
            income             : observable,
            addIncome          : action,
            getIncomeWithStore : action,
        });
    }

    addIncome(newItcome: number): void {
        this.income = this.income + newItcome;
        const updatedBalance = balanceStore.moneyAccount + newItcome;
        
        balanceStore.updateCashAccount(updatedBalance);
    }
    getIncomeWithStore(itcome:number):void {
        this.income = itcome;
    }
}

export const incomeStore = new IncomeStore();
