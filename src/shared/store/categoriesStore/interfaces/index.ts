import { IResponseCategorie, IResponseSpendingOperation } from 'interfaces';


export interface ICategoriesStore {
  categories: IResponseCategorie[];
  add: (categorie: IResponseCategorie) => void;
  delete: (id: string) => void;
  setCategoriesFromDB:(categories: IResponseCategorie[]) => void
  updateSpendingInCategorie:(newSpending: IResponseSpendingOperation)=> void
}
