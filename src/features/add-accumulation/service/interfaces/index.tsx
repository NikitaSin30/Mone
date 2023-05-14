import { IFormAccumulation } from 'features/add-accumulation/interfaces';
import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';



export interface IAccumulationService {
  addAccumulation:(newAccumulation: IFormAccumulation) => Promise<any>
  createOperation:(accumulation : number) => IAccumulationOperation
}
