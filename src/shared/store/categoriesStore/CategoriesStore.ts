import { action, makeObservable, observable } from 'mobx';
import { ICategoriesStore, ICategorie } from './interfaces/interfaces';



class CategoriesStore implements ICategoriesStore {
  categories: ICategorie[] = [];
  constructor() {
    makeObservable(this, {
      categories: observable,
      addCatigorie: action,
      removeCategorie: action,
    });
  }
  addCatigorie(categorie: ICategorie): void {
    this.categories.push(categorie);
  }
  removeCategorie(id: string): void {
    this.categories = this.categories.filter((categorie) => categorie.id !== id);
  }
  getCategorie(id: string): any {
    const a = this.categories.filter((categorie) => categorie.id === id);
    return a[0];
  }
  updateSpandingInCategorie(spentInCategorie: string, spentMoney: number): void {
    this.categories = this.categories.map((categorie) =>
      categorie.categorie === spentInCategorie
        ? {
            ...categorie,
            spentMoney: spentMoney + categorie.spentMoney,
          }
        : categorie
    );
  }
}
export const categoriesStore = new CategoriesStore();
