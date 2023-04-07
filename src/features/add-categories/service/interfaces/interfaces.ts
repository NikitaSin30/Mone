import { ICategorie } from "shared/store/categoriesStore/interfaces";

export interface ICategoriesService {
    addCategorie:(categorie: string, showModalError: () => void, switchShowModal:() => void) => void;
    checkStoreHasCategorie:(validatedCategorie: string) => boolean;
    addSpendingInCategorie:(id:string, spending : number) => Promise<void>
}
