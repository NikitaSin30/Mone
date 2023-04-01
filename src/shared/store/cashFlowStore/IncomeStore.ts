import { makeAutoObservable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { IIncomeStore } from './interfaces/interfaces';
import { IIncomeOperation } from './interfaces/interfaces';


export class IncomeStore implements IIncomeStore {
    incomeOperations:IIncomeOperation[];
    income:number;

    constructor() {
        this.incomeOperations = [];
        this.income = 0;
        makeAutoObservable(this)
    }

    addIncome(operation: IIncomeOperation): void {
        this.income = this.income + operation.income;
        const updatedBalance = balanceStore.moneyAccount + operation.income;

        this.incomeOperations.push(operation);
        console.log(this.incomeOperations);
        console.log(this.income);


        balanceStore.updateCashAccount(updatedBalance);
    }

    getIncomeWithStore(itcome: number): void {
        this.income = itcome;
    }
    setIncome(income:number, operations:IIncomeOperation[]) {
        this.income = income
        this.incomeOperations = operations
    }

}

export const incomeStore = new IncomeStore();
