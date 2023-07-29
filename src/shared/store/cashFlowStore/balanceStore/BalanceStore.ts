import { makeAutoObservable } from 'mobx';
import { OPERATION_INCOME } from 'shared/constants';
import { IBalanceStore } from '../interfaces';



export class BalanceStore implements IBalanceStore {
    public moneyAccount = 0;

    constructor() {
        makeAutoObservable(this);
    }

    public updateCashAccount(newBalance: number ) {
        this.moneyAccount = newBalance;
    }

    public setBalanceFromDB(balance:number) {
        this.moneyAccount = balance;
    }
    updateAfterDeleteOperation(sum:number, typeOperation:string) {
        if (typeOperation === OPERATION_INCOME ) {
            this.moneyAccount -= sum;
        }
        else {
            this.moneyAccount += sum;
        }
    }
}

export const balanceStore = new BalanceStore();
