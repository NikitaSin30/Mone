import { action, makeObservable, observable } from 'mobx';
import { ICategorie } from './interfaces/interfaces';


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
    removeCategorie(id: string): void {
        this.categories = this.categories.filter((cat) => cat.id !== id);
    }

    setNewSpandingInCategorie(newSpending: ICategorie): void {
        this.categories = this.categories.map((categorie) =>
            categorie.id === newSpending.id
                ? {
                    ...categorie,
                    spentMoney : newSpending.spentMoney + categorie.spentMoney,
                }
                : categorie,
        );
    }
}
export const CategoriesStore = new Categories();
