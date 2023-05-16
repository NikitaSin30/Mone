import { makeAutoObservable } from 'mobx';
import { balanceStore } from '../balanceStore/BalanceStore';
import { IIncomeOperationWithID,IIncomeStore } from './interfaces';



export class IncomeStore implements IIncomeStore {
    incomeOperations:IIncomeOperationWithID[] = [];
    income:number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addIncome(operation: IIncomeOperationWithID) {
        this.income = this.income + operation.income;
        const updatedBalance = balanceStore.moneyAccount + operation.income;

        console.log(this.incomeOperations);
        this.incomeOperations.push(operation);

        balanceStore.updateCashAccount(updatedBalance);
    }

    setIncomeFromDB(income:number, operations:IIncomeOperationWithID[]) {
        this.income = income;
        this.incomeOperations = operations;
    }
    deleteOperation({ id }:IIncomeOperationWithID) {
        this.incomeOperations = this.incomeOperations.filter(operation => operation.id !== id);
    }
    updateAfterDeleteOperation(sum:number) {
        this.income -= sum;
    }
}

export const incomeStore = new IncomeStore();
