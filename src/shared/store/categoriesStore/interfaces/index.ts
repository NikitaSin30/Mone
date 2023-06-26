import { ICategorie, ISpendingOperation } from 'interfaces';


export interface ICategoriesStore {
  categories: ICategorie[];
  addCatigorie: (categorie: ICategorie) => void;
  deleteCategorie: (id: string) => void;
  setCategoriesFromDB:(categories: ICategorie[]) => void
  updateSpendingInCategorie:(newSpending: ISpendingOperation)=> void
}
