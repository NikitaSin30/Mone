import { makeAutoObservable } from 'mobx';
import { balanceStore } from '../balanceStore/BalanceStore';
import { ISpendingStore } from '../interfaces';
import { IResponseSpendingOperation } from 'interfaces';



export class SpendingStore implements ISpendingStore {
    public spendingOperations: IResponseSpendingOperation[] = [];
    public spending:number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    public addSpending(operation: IResponseSpendingOperation) {
        this.spending = this.spending + operation.spending ;
        const updatedBalance = balanceStore.moneyAccount - operation.spending;

        this.spendingOperations.push(operation);

        balanceStore.updateCashAccount(updatedBalance);
    }

    public setSpendingFromDB(spending:number, spendingOperations : IResponseSpendingOperation[]) {
        this.spending = spending;
        this.spendingOperations = spendingOperations;
    }

    public deleteOperation( id :string) {
        this.spendingOperations = this.spendingOperations.filter(operation => operation.id !== id);
    }
    public updateAfterDeleteOperation(sum:number) {
        this.spending -= sum;
    }

}

export const spendingStore = new SpendingStore();
