import { action, makeObservable, observable } from 'mobx';

export interface ICategorie {
  categorie: string;
  spentMoney: number;
}


interface ICategories {
  categories: Array<ICategorie>;
  setCatigorie(categorie: ICategorie): void;
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
    setNewSpandingInCategorie(newSpending:ICategorie) : void {
        this.categories = this.categories.map((categorie) => (categorie.categorie === newSpending.categorie ? {
            ...categorie,
            spentMoney : newSpending.spentMoney + categorie.spentMoney,
        } : categorie),
        );
    }
}
export const CategoriesStore = new Categories();
