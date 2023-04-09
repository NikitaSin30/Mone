import { ICategorie } from "shared/store/categoriesStore/interfaces/interfaces";

export interface ICategoriesService {
    addCategorie:(categorie: string, showModalError: () => void, switchShowModal:() => void) => void;
    validateCategorie:(categorie: string) => string;
    createCategorie:(uniqueCategorie: string) => ICategorie
}
