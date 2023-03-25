import { action, makeObservable, observable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { IIncomeStore } from './interfaces/interfaces';
import { IIncomeOperation } from './interfaces/interfaces';


export class IncomeStore implements IIncomeStore {
    incomeOperations:IIncomeOperation[];
    income:number;

    constructor() {
        this.incomeOperations = [];
        this.income = 0;
        makeObservable(this, {
            income             : observable,
            addIncome          : action,
            getIncomeWithStore : action,
        });
    }

    addIncome(operation: IIncomeOperation): void {
        this.income = this.income + operation.income;
        const updatedBalance = balanceStore.moneyAccount + operation.income;

        this.incomeOperations.push(operation);
        balanceStore.updateCashAccount(updatedBalance);
    }

    getIncomeWithStore(itcome: number): void {
        this.income = itcome;
    }
}

export const incomeStore = new IncomeStore();
