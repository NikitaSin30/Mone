import { ISpendingOperationWithID } from 'shared/store/cashFlowStore/spendingStore/interfaces';
import { ICategorie } from 'features/add-categories/service/interfaces';


export interface ICategorieWithID extends ICategorie{
  id:string
}

export interface ICategoriesStore {
  categories: ICategorieWithID[];
  addCatigorie: (categorie: ICategorieWithID) => void;
  deleteCategorie: (id: string) => void;
  setCategoriesFromDB:(categories: ICategorieWithID[]) => void
  updateSpendingInCategorie:(newSpending: ISpendingOperationWithID)=> void
}
