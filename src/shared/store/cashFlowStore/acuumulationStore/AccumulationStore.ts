import { makeAutoObservable } from 'mobx';
import { balanceStore } from '../balanceStore/BalanceStore';
import { IAccumulationOperation, IResponseAccumulationOperation } from 'interfaces';
import { IAccumulationStore } from '../interfaces';


export class AccumulationStore implements IAccumulationStore {
    public accumulation = 0;
    public accumulationOperations:IResponseAccumulationOperation[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public addAccumulation(operationAccumulation:IResponseAccumulationOperation ) {
        this.accumulation = this.accumulation + operationAccumulation.accumulation;
        const updatedBalance = balanceStore.moneyAccount - operationAccumulation.accumulation;

        balanceStore.updateCashAccount(updatedBalance);
        this.accumulationOperations.push(operationAccumulation);
    }

    public setAccumulationFromDB(accumulation:number,operations:IResponseAccumulationOperation[]) {
        this.accumulation = accumulation;
        this.accumulationOperations = operations;
    }
}

export const accumulationStore = new AccumulationStore();
