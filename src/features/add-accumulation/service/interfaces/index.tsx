import { IFormAccumulation } from 'features/add-accumulation/interfaces';


export interface IAccumulationOperation {
  accumulation: number;
  date: string;
}

export interface IAccumulationService {
  addAccumulation:(newAccumulation: IFormAccumulation) => Promise<void>
}
