import { IFormSpending } from '../../interfaces';


export interface ISpendingService {
    addSpending: (newSpending : IFormSpending , switchShowModal:() => void) => Promise<void>;
}

export interface ISpendingOperation {
  spending: number;
  categorie: string;
  date: string;
}
