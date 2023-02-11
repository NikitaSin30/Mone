import { action, makeObservable, observable } from 'mobx';


interface ICategories {
  categories: Array<string>;
  setCatigorie(categorie:string) : void
}

class Categories implements ICategories {
    categories: Array<string> = [];
    constructor() {
        makeObservable(this, {
            categories   : observable,
            setCatigorie : action,
        });
    }
    setCatigorie(categorie: string): void {
        this.categories.push(categorie);
        console.log(this.categories);
    }
}

export const CategoriesStore = new Categories();
