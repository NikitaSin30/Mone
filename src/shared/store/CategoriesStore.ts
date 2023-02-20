import { action, makeObservable, observable } from 'mobx';

interface ICategorie {
    categorie:string,
    id:string,
}

interface ICategories {
  categories: Array<ICategorie>;
  setCatigorie(categorie:ICategorie) : void
  removeCategorie(id:string) :void
}

class Categories implements ICategories {
    categories: Array<ICategorie> = [];
    constructor() {
        makeObservable(this, {
            categories   : observable,
            setCatigorie : action,
        });
    }
    setCatigorie(categorie: ICategorie): void {
        this.categories.push(categorie);
    }
    removeCategorie(id:string) : void {
        this.categories = this.categories.filter(cat => cat.id !== id);
    }

}

export const CategoriesStore = new Categories();
