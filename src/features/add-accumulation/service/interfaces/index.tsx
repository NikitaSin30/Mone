import { IFormAccumulation } from 'features/add-accumulation/interfaces';
import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';



export interface IAccumulationService {
  add:(newAccumulation: IFormAccumulation) => Promise<void>
}
