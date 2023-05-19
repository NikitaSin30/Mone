import { IFormCategorie } from 'features/add-categories/interfaces';
import { ICategorie } from 'shared/store/categoriesStore/interfaces';

export interface ICategoriesService {
    addCategorie:(categorie: IFormCategorie) => Promise<void>;
    checkStoreHasCategorie:(validatedCategorie: string) => void;
    createCategorie:(categorie:string) => ICategorie;
    deleteCategorie:(idCategorie:string) => Promise<void>
}
