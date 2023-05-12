import { IFormSpending } from '../../interfaces';


export interface ISpendingService {
    addSpending: (newSpending : IFormSpending ) => Promise<void>;
}

export interface ISpendingOperation {
  spending: number;
  categorie: string;
  date: string;
}
