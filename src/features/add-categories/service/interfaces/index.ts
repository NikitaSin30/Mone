import { IFormCategorie } from 'features/add-categories/interfaces';


export interface ICategoriesService {
    addCategorie:(categorie: IFormCategorie, showModalError: () => void, switchShowModal:() => void) => void;
    deleteCategorie:(idCategorie:string) => Promise<void>
}
