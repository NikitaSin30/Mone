import { IFormAccumulation } from 'interfaces';
import { IAccumulationOperation } from 'interfaces';


export interface IAccumulationService {
  add:(newAccumulation: IFormAccumulation) => Promise<void>
  delete:(id:string) => Promise<void>
  createOperation:(newAccumulation : IFormAccumulation) => IAccumulationOperation
}
