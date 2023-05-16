import { ICategorieWithID } from 'shared/store/categoriesStore/interfaces';

export interface ICategorieItem {
    categorie : ICategorieWithID,
    onSuccesDelete : (id:string) => void
}
