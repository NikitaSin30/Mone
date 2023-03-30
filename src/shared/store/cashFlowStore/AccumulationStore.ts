import { action, makeObservable, observable } from 'mobx';
import { balanceStore } from './BalanceStore';
import { IAccumulationStore, IAccumulationOperation } from './interfaces/interfaces';



export class AccumulationStore implements IAccumulationStore {
  accumulation = 0;
  accumulationOperation: IAccumulationOperation[] = [];

  constructor() {
    makeObservable(this, {
      accumulation: observable,
      addAccumulation: action,
      getAccumulationWithDB: action,
    });
  }


  addAccumulation(newAccumulation: IAccumulationOperation): void {
    this.accumulation = this.accumulation + newAccumulation.accumulation;
    this.accumulationOperation.push(newAccumulation);

    const updatedBalance = balanceStore.moneyAccount - newAccumulation.accumulation;
    balanceStore.updateCashAccount(updatedBalance);
  }
  getAccumulationWithDB(accumulation: number): void {
    this.accumulation = accumulation;
  }
}

export const accumulationStore = new AccumulationStore();
