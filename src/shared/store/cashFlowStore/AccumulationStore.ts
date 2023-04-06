import { makeAutoObservable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { IAccumulationStore } from './interfaces';
import { IAccumulationOperation } from './interfaces';



export class AccumulationStore implements IAccumulationStore {
    accumulation = 0;
    accumulationOperation: IAccumulationOperation[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addAccumulation(newAccumulation: IAccumulationOperation): void {
        this.accumulation = this.accumulation + newAccumulation.accumulation;
        this.accumulationOperation.push(newAccumulation);

        const updatedBalance = balanceStore.moneyAccount - newAccumulation.accumulation;

        balanceStore.updateCashAccount(updatedBalance);
    }

    setAccumulationWithDB(accumulation: number, operations:IAccumulationOperation[]): void {
        this.accumulation = accumulation;
        this.accumulationOperation = operations;
    }

    getAccumulationWithDB(accumulation:number) {
        this.accumulation = accumulation;
    }
}

export const accumulationStore = new AccumulationStore();
