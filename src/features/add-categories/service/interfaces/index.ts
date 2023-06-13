import { IFormCategorie } from 'features/add-categories/interfaces';



export interface ICategoriesService {
    addCategorie:(categorie: IFormCategorie) => Promise<void>;
    deleteCategorie:(idCategorie:string) => Promise<void>
}
