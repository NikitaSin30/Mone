import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { IIncomeStore } from './interfaces/interfaces';
import { IIncomeOperation } from './interfaces/interfaces';


export class IncomeStore implements IIncomeStore {
    incomeOperations:IIncomeOperation[] = [];
    income:number = 0

    constructor() {
            makeAutoObservable(this);
    }

    addIncome(operation: IIncomeOperation): void {
        this.income = this.income + operation.income;
        const updatedBalance = balanceStore.moneyAccount + operation.income;

        this.incomeOperations.push(operation);
        balanceStore.updateCashAccount(updatedBalance);
    }

    setIncomeWithStore(itcome: number,operations:IIncomeOperation[]): void {
        this.income = itcome;
        this.incomeOperations = operations
    }
}

export const incomeStore = new IncomeStore();
