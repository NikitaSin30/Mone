import { IFormCategorie } from "features/add-categories/interfaces/interfaces";
import { ICategorie } from "shared/store/categoriesStore/interfaces/interfaces";

export interface ICategoriesService {
    addCategorie:(categorie: IFormCategorie, showModalError: () => void, switchShowModal:() => void) => void;
    checkStoreHasCategorie:(validatedCategorie: string) => boolean;
    validateCategorie:(categorie: string) => string;
    createCategorie:(uniqueCategorie: string) => ICategorie
}
