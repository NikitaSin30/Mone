import { ICategorieWithID } from 'shared/store/categoriesStore/interfaces';
import { ICategorie } from 'features/add-categories/service/interfaces';

export interface IResponseAddCategorie {
    message:string,
    categorieWithID:ICategorieWithID
}

export interface ICategoriesApi {
  addCategorie: (categorie: ICategorie, userId: string) => Promise<IResponseAddCategorie>;
  deleteCategorie: (idCategorie:string, userId:string) => Promise<void>
}
