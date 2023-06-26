import { IFormCategorie } from 'interfaces';



export interface ICategoriesService {
    add:(categorie: IFormCategorie) => Promise<void>;
    delete:(categorieID:string) => Promise<void>
}
