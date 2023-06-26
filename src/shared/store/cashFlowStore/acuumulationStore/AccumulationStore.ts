import { makeAutoObservable } from 'mobx';
import { balanceStore } from '../balanceStore/BalanceStore';
import { IAccumulationOperation } from 'interfaces';
import { IAccumulationStore } from '../interfaces';


export class AccumulationStore implements IAccumulationStore {
    public accumulation = 0;
    public accumulationOperations:IAccumulationOperation[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public addAccumulation(operationAccumulation:IAccumulationOperation ) {
        this.accumulation = this.accumulation + operationAccumulation.accumulation;
        const updatedBalance = balanceStore.moneyAccount - operationAccumulation.accumulation;

        balanceStore.updateCashAccount(updatedBalance);
        this.accumulationOperations.push(operationAccumulation);
    }

    public setAccumulationFromDB(accumulation:number,operations:IAccumulationOperation[]) {
        this.accumulation = accumulation;
        this.accumulationOperations = operations;
    }
}

export const accumulationStore = new AccumulationStore();
