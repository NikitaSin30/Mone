import { TAllOperations } from '../types';

export interface IOperationStore {
    allOperations : TAllOperations[];
    addOperation:(operation : TAllOperations)=> void
    setAllOperationsFromDB:(allOperations : TAllOperations[]) => void
}
