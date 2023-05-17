import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';

export interface IStrategy {
    deleteOperation:<T extends TAllOperations>(operation:T) => void
    upadateBalance:(sum:number) => void
}

export interface IStrategyContext {
    strategy:IStrategy
    setStrategy:(strategy:IStrategy) => void
}
