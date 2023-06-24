import { IFormCategorie } from 'features/add-categories/interfaces';



export interface ICategoriesService {
    add:(categorie: IFormCategorie) => Promise<void>;
    delete:(categorieID:string) => Promise<void>
}
