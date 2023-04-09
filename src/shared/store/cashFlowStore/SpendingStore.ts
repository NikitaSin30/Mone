import { makeAutoObservable } from 'mobx';
import { balanceStore } from './balanceStore/BalanceStore';
import { ISpendingStore } from './interfaces';
import { ISpendingOperation } from './interfaces';

class SpendingStore implements ISpendingStore {
    spendingOperations: ISpendingOperation[] = [];
    spending:number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addSpending(operation: ISpendingOperation) {
        this.spending = this.spending + operation.spending ;
        const updatedBalance = balanceStore.moneyAccount - operation.spending;

        this.spendingOperations.push(operation);

        balanceStore.updateCashAccount(updatedBalance);
    }
    setSpendingWithDB(spending: number, operations:ISpendingOperation[]): void {
        this.spending = spending;
    }
    setSpending(spending:number, spendingOperations : ISpendingOperation[]) {
        this.spending = spending;
        this.spendingOperations = spendingOperations;
    }

}

export const spendingStore = new SpendingStore();
