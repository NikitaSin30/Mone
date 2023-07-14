import { makeAutoObservable } from 'mobx';
import { balanceStore } from '../balanceStore/BalanceStore';
import { IIncomeStore } from '../interfaces';
import { IResponseIncomeOperation } from 'interfaces';


export class IncomeStore implements IIncomeStore {
    public incomeOperations:IResponseIncomeOperation[] = [];
    public income:number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    public addIncome(operation: IResponseIncomeOperation) {
        this.income = this.income + operation.income;
        const updatedBalance = balanceStore.moneyAccount + operation.income;

        console.log(this.incomeOperations);
        this.incomeOperations.push(operation);

        balanceStore.updateCashAccount(updatedBalance);
    }

    public setIncomeFromDB(income:number, operations:IResponseIncomeOperation[]) {
        this.income = income;
        this.incomeOperations = operations;
    }

}

export const incomeStore = new IncomeStore();
