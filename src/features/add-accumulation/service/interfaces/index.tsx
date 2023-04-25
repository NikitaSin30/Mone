import { IFormAccumulation } from 'features/add-accumulation/interfaces';
import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';



export interface IAccumulationService {
  addAccumulation:(newAccumulation: IFormAccumulation, showModalError: () => void, switchShowModal: () => void) => Promise<any>
  createOperation:(accumulation : number) => IAccumulationOperation
}
