import { action, makeObservable, observable } from 'mobx';
import { IOperationInfo } from 'features/auth/interfaces/interfaces';
import { ICashStore } from './interfaces/interfaces';



export class CashStore implements ICashStore {
    operationInfo = [];
    incomeCash = 0;
    spentMoney = 100;
    moneyAccount = this.incomeCash - this.spentMoney;

    constructor() {
        makeObservable(this, {
            operationInfo    : observable,
            moneyAccount     : observable,
            incomeCash       : observable,
            spentMoney       : observable,
            setIncome        : action,
            setSpending      : action,
            setInfoOperation : action,
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
    setInfoOperation(data: IOperationInfo): void {
        console.log(data);
    }
}

export const CashFlowStore = new CashStore();
