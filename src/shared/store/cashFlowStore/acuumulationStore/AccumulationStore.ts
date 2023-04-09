import { makeAutoObservable } from 'mobx';
import { balanceStore } from '../BalanceStore';
import { IAccumulationOperation, IAccumulationStore } from '../interfaces';


export class AccumulationStore implements IAccumulationStore {
    accumulation = 0;
    accumulationOperations:IAccumulationOperation[] = [];

    constructor() {
        makeAutoObservable(this);
    }
    addAccumulation(operationAccumulation:IAccumulationOperation ) {
        this.accumulation = this.accumulation + operationAccumulation.accumulation;
        const updatedBalance = balanceStore.moneyAccount - operationAccumulation.accumulation;

        balanceStore.updateCashAccount(updatedBalance);
        this.accumulationOperations.push(operationAccumulation);
    }

    setAccumulation(accumulation:number,operations:IAccumulationOperation[]) {
        this.accumulation = accumulation;
        this.accumulationOperations = operations;
    }
}

export const accumulationStore = new AccumulationStore();
