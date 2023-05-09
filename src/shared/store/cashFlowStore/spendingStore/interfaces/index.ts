import { ISpendingOperation } from 'features/add-spending/service/interfaces';


export interface ISpendingOperationWithID extends ISpendingOperation {
  id:string
}

export interface ISpendingStore {
  spending: number;
  spendingOperations: ISpendingOperationWithID[];
  addSpending: (operation: ISpendingOperationWithID) => void;
  setSpendingFromDB:(spending: number, operations: ISpendingOperationWithID[]) => void;
}
