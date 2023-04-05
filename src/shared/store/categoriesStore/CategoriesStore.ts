import { action, makeObservable, observable } from 'mobx';
import { ICategoriesStore, ICategorie } from './interfaces';



class CategoriesStore implements ICategoriesStore {
    categories: ICategorie[] = [];
    constructor() {
        makeObservable(this, {
            categories      : observable,
            addCatigorie    : action,
            removeCategorie : action,
        });
    }
    addCatigorie(categorie: ICategorie) {
        this.categories.push(categorie);
    }
    removeCategorie(id: string): void {
        this.categories = this.categories.filter((categorie) => categorie.id !== id);
    }

    updateSpandingInCategorie(newSpending: ICategorie) {
        this.categories = this.categories.map((categorie) =>
            categorie.id === newSpending.id
                ? {
                    ...categorie,
                    spentMoney : newSpending.spending + categorie.spending,
                }
                : categorie,
        );
    }
}
export const categoriesStore = new CategoriesStore();
