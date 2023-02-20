import { action, makeObservable, observable } from 'mobx';
import { ICashStore } from './interfaces/interfaces';



export class CashStore implements ICashStore {
    incomeCash = 0;
    spentMoney = 0;
    moneyAccount = this.incomeCash - this.spentMoney;

    constructor() {
        makeObservable(this, {
            moneyAccount : observable,
            incomeCash   : observable,
            spentMoney   : observable,
            setIncome    : action,
            setSpending  : action,
        });
    }
    private updateCashAccount(): void {
        this.moneyAccount = this.incomeCash - this.spentMoney;
    }
    setIncome(sum: number): void {
        this.incomeCash = this.incomeCash + sum;
        this.updateCashAccount();
    }
    setSpending(sum: number): void {
        this.spentMoney = this.spentMoney + sum;
        this.updateCashAccount();
    }
}

export const CashFlowStore = new CashStore();
