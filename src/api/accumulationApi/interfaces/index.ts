import { IAccumulationOperation } from 'features/add-accumulation/service/interfaces';
import { IAccumulationOperationWithID } from 'shared/store/cashFlowStore/acuumulationStore/interfaces';

export interface IResponseAddAccumulation {
    message:string,
    accumulationOperationWithID:IAccumulationOperationWithID
}

export interface IAccumulationApi{
    addAccumulation:(id: string, accumulationOperation: IAccumulationOperation) => Promise<IResponseAddAccumulation>
}
