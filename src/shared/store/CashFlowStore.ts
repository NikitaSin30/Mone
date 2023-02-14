import { action, makeObservable, observable } from 'mobx';


type InfoOperation = {
  income: number;
  date: Date;
};

interface ICashStore {
  infoOperation:Array<any> ,
  moneyAccount: number;
  incomeCash: number;
  spentMoney: number;
  setIncome(sum: number): void;
  setSpending(sum: number): void;
}


export class CashFlowStore implements ICashStore {
    infoOperation = [];
    moneyAccount = 0;
    incomeCash = 0;
    spentMoney = 100;
    constructor() {
        makeObservable(this, {
            infoOperation    : observable,
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
    setInfoOperation(data: InfoOperation):void {
        console.log(data);
        
    }
}

export const CashFlow = new CashFlowStore();
