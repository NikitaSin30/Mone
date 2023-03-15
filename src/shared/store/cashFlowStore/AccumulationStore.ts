import { action, makeObservable, observable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { IAccumulationStore } from './interfaces/interfaces';


export class AccumulationStore implements IAccumulationStore {
    accumulation = 0;

    constructor() {
        makeObservable(this, {
            accumulation    : observable,
            addAccumulation : action,
        });
    }

    addAccumulation(newAccumulation: number): void {
        this.accumulation = this.accumulation + newAccumulation;
        const updatedBalance = balanceStore.moneyAccount - newAccumulation;

        balanceStore.updateCashAccount(updatedBalance);
    }
}

export const accumulationStore = new AccumulationStore();
