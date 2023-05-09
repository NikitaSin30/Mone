import { makeAutoObservable } from 'mobx';
import { ICategoriesStore, ICategorieWithID } from './interfaces';
import { ISpendingOperationWithID } from '../cashFlowStore/spendingStore/interfaces';



class CategoriesStore implements ICategoriesStore {
    categories: ICategorieWithID[] = [];

    constructor() {
        makeAutoObservable(this);
    }
    addCatigorie(categorie: ICategorieWithID): void {
        this.categories.push(categorie);
    }
    deleteCategorie(id: string): void {
        this.categories = this.categories.filter((categorie) => categorie.id !== id);
    }

    getCategorie(id: string) {
        const categorie = this.categories.find((categorie) => categorie.id === id);

        if (!categorie) {
            throw new Error();
        }

        return categorie ;
    }

    setCategoriesFromDB(categories: ICategorieWithID[]) {
        this.categories = categories;
    }

    updateSpendingInCategorie(newSpending: ISpendingOperationWithID): void {
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
