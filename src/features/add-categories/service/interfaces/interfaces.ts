
export interface ICategoriesService {
    addCaregorie:(categorie: string, showModalError: () => void, switchShowModal:() => void) => void;
    checkStoreHasCategorie:(validatedCategorie: string) => boolean;
    validateCategorie:(categorie: string) => string;
    createCategorie:(uniqueCategorie: string) => string
}