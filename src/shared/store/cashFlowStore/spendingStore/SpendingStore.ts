import { makeAutoObservable } from 'mobx';
import { balanceStore } from '../balanceStore/BalanceStore';
import { ISpendingStore } from './interfaces';
import { ISpendingOperationWithID } from './interfaces';



export class SpendingStore implements ISpendingStore {
    spendingOperations: ISpendingOperationWithID[] = [];
    spending:number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addSpending(operation: ISpendingOperationWithID) {
        this.spending = this.spending + operation.spending ;
        const updatedBalance = balanceStore.moneyAccount - operation.spending;

        this.spendingOperations.push(operation);

        balanceStore.updateCashAccount(updatedBalance);
    }

    setSpendingFromDB(spending:number, spendingOperations : ISpendingOperationWithID[]) {
        this.spending = spending;
        this.spendingOperations = spendingOperations;
    }

    deleteOperation({ id }:ISpendingOperationWithID) {
        this.spendingOperations = this.spendingOperations.filter(operation => operation.id !== id);
    }
    updateAfterDeleteOperation(sum:number) {
        this.spending -= sum;
    }

}

export const spendingStore = new SpendingStore();
