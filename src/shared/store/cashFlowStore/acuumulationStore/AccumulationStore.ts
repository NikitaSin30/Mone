import { makeAutoObservable } from 'mobx';
import { balanceStore } from '../balanceStore/BalanceStore';
import { IAccumulationStore, IAccumulationOperationWithID } from './interfaces';



export class AccumulationStore implements IAccumulationStore {
    accumulation = 0;
    accumulationOperations:IAccumulationOperationWithID[] = [];

    constructor() {
        makeAutoObservable(this);
    }
    addAccumulation(operationAccumulation:IAccumulationOperationWithID ) {
        this.accumulation = this.accumulation + operationAccumulation.accumulation;
        const updatedBalance = balanceStore.moneyAccount - operationAccumulation.accumulation;

        balanceStore.updateCashAccount(updatedBalance);
        this.accumulationOperations.push(operationAccumulation);
    }

    setAccumulationFromDB(accumulation:number,operations:IAccumulationOperationWithID[]) {
        this.accumulation = accumulation;
        this.accumulationOperations = operations;
    }
}

export const accumulationStore = new AccumulationStore();
