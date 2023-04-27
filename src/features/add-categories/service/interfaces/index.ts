import { IFormCategorie } from 'features/add-categories/interfaces';
import { ICategorie } from 'shared/store/categoriesStore/interfaces';

export interface ICategoriesService {
    addCategorie:(categorie: IFormCategorie, showModalError: () => void, switchShowModal:() => void) => void;
    checkStoreHasCategorie:(validatedCategorie: string) => void;
    createCategorie:(categorie:string) => ICategorie;
    deleteCategorie:(idCategorie:string) => Promise<void>
}
