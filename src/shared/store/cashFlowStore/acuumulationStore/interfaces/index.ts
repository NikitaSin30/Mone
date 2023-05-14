import { IAccumulationOperation } from 'features/add-accumulation/service/interfaces';

export interface IAccumulationOperationWithID extends IAccumulationOperation {
  id:string
}

export interface IAccumulationStore {
  accumulation: number;
  accumulationOperations: IAccumulationOperationWithID[];
  setAccumulationFromDB:(accumulation: number, operations: IAccumulationOperationWithID[]) => void;
  addAccumulation:(operationAccumulation:IAccumulationOperationWithID ) => void
  deleteOperation:(operationAccumulation:IAccumulationOperationWithID) => void
}
