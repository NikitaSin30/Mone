import { makeAutoObservable } from 'mobx';
import { ICategoriesStore } from './interfaces';
import { IResponseCategorie } from 'interfaces';
import { IFormSpending } from 'interfaces';



class CategoriesStore implements ICategoriesStore {
    public categories: IResponseCategorie[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public add(categorie: IResponseCategorie): void {
        this.categories.push(categorie);
    }
    public delete(id: string): void {
        this.categories = this.categories.filter((categorie) => categorie.id !== id);
    }

    public getCategorie(id: string) {
        const categorie = this.categories.find((categorie) => categorie.id === id);

        if (!categorie) {
            throw new Error();
        }

        return categorie ;
    }

    public setCategoriesFromDB(categories: IResponseCategorie[]) {
        this.categories = categories;
    }
    public updateSpendingInCategorie(newSpending: IFormSpending): void {
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
