import { TAllOperations } from 'types';

export interface IOperationItem {
    operation : TAllOperations
    onSuccessDelete: (id:string) => Promise<void>
}
