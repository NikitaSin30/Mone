import { makeAutoObservable } from 'mobx';
<<<<<<< HEAD:src/shared/store/cashFlowStore/IncomeStore.ts
import { balanceStore } from './balanceStore/BalanceStore';
import { IIncomeStore } from './interfaces';
import { IIncomeOperation } from './interfaces';
=======
import { balanceStore } from '../BalanceStore';
import { IIncomeStore } from '../interfaces';
import { IIncomeOperation } from '../interfaces';
>>>>>>> master:src/shared/store/cashFlowStore/incomeStore/IncomeStore.ts


export class IncomeStore implements IIncomeStore {
    incomeOperations:IIncomeOperation[] = [];
    income:number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addIncome(operation: IIncomeOperation) {
        this.income = this.income + operation.income;
        const updatedBalance = balanceStore.moneyAccount + operation.income;

        this.incomeOperations.push(operation);

        balanceStore.updateCashAccount(updatedBalance);
    }

    setIncomeFromDB(income:number, operations:IIncomeOperation[]) {
        this.income = income;
        this.incomeOperations = operations;
    }

}

export const incomeStore = new IncomeStore();
