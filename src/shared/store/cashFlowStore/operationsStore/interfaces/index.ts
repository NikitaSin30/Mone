
import { TAllOperations } from '../types';

export interface IOperationsStore {
    addOperation:(operation : TAllOperations) => void
    setAllOperationsFromDB:(allOperations : TAllOperations[]) => void
}
