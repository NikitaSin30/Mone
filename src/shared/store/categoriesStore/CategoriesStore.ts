import { IFormSpending } from 'features/add-spending/interfaces';
import { makeAutoObservable } from 'mobx';
import { ICategoriesStore, ICategorie } from './interfaces';



class CategoriesStore implements ICategoriesStore {
    categories: ICategorie[] = [];
    constructor() {
        makeAutoObservable(this);
    }
    addCatigorie(categorie: ICategorie): void {
        this.categories.push(categorie);
    }
    removeCategorie(id: string): void {
        this.categories = this.categories.filter((categorie) => categorie.id !== id);
    }

    getCategorie(id: string) {
        const categorie = this.categories.find((categorie) => categorie.id === id);

        if (!categorie) {
            throw new Error();
        }

        return categorie ;
    }

    setCategoriesFromDB(categories: ICategorie[]) {
        this.categories = categories;
    }
    updateSpendingInCategorie(newSpending: IFormSpending): void {
        this.categories = this.categories.map((categorie) =>
            categorie.categorie === newSpending.categorie
                ? {
                    ...categorie,
                    spending : newSpending.spending + categorie.spending,
                }
                : categorie,
        );
    }
}
export const categoriesStore = new CategoriesStore();
