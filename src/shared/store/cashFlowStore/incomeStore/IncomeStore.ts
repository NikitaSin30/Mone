import { makeAutoObservable } from 'mobx';
import { balanceStore } from '../balanceStore/BalanceStore';
import { IIncomeStore } from '../interfaces';
import { IIncomeOperation } from 'interfaces';


export class IncomeStore implements IIncomeStore {
    public incomeOperations:IIncomeOperation[] = [];
    public income:number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    public addIncome(operation: IIncomeOperation) {
        this.income = this.income + operation.income;
        const updatedBalance = balanceStore.moneyAccount + operation.income;

        this.incomeOperations.push(operation);

        balanceStore.updateCashAccount(updatedBalance);
    }

    public setIncomeFromDB(income:number, operations:IIncomeOperation[]) {
        this.income = income;
        this.incomeOperations = operations;
    }

}

export const incomeStore = new IncomeStore();
