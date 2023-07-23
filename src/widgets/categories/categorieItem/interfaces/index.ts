import { IResponseCategorie } from 'interfaces';

export interface ICategorieItem {
    categorie : IResponseCategorie,
    onSuccesDelete : (id:string) => void
}
