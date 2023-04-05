import { action, makeObservable, observable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { IIncomeStore } from './interfaces';
import { IIncomeOperation } from './interfaces';


export class IncomeStore implements IIncomeStore {
    incomeOperations:IIncomeOperation[] = [];
    income:number = 0;

    constructor() {
        makeObservable(this, {
            income             : observable,
            addIncome          : action,
            getIncomeWithStore : action,
        });
    }

    addIncome(operation: IIncomeOperation) {
        this.income = this.income + operation.income;
        const updatedBalance = balanceStore.moneyAccount + operation.income;

        this.incomeOperations.push(operation);
        balanceStore.updateCashAccount(updatedBalance);
    }

    getIncomeWithStore(itcome: number) {
        this.income = itcome;
    }
}

export const incomeStore = new IncomeStore();
