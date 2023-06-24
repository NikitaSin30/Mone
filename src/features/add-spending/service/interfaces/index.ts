import { IFormSpending } from '../../interfaces';


export interface ISpendingService {
    add: (newSpending : IFormSpending) => Promise<void>;
}
