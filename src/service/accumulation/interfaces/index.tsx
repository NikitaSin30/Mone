import { IFormAccumulation } from 'interfaces';
import { IAccumulationOperation } from 'interfaces';


export interface IAccumulationService {
  add:(newAccumulation: IFormAccumulation) => Promise<void>
  createOperation:(newAccumulation : IFormAccumulation) => IAccumulationOperation
}
