import { makeAutoObservable } from 'mobx';
import { IBalanceStore } from './interfaces';
import { OPERATION_INCOME } from 'shared/service/factory/constants';



export class BalanceStore implements IBalanceStore {
    moneyAccount = 0;


    constructor() {
        makeAutoObservable(this);
    }

    updateCashAccount(newBalance: number ) {
        this.moneyAccount = newBalance;
    }

    setBalanceFromDB(balance:number) {
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
