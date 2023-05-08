import { ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';

export interface ICategorie {
  categorie: string;
  id: string;
  spending: number;
}

export interface ICategoriesStore {
  categories: Array<ICategorie>;
  addCatigorie: (categorie: ICategorie) => void;
  deleteCategorie: (id: string) => void;
  setCategoriesFromDB:(categories: ICategorie[]) => void
  updateSpendingInCategorie:(newSpending: ISpendingOperation)=> void
}
