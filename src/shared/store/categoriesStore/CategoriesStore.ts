import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { ICategoriesStore, ICategorie } from './interfaces/interfaces';



class CategoriesStore implements ICategoriesStore {
  categories: ICategorie[] = [];
  constructor() {
    makeAutoObservable(this)
  }

  addCatigorie(categorie: ICategorie) {
    this.categories.push(categorie);
  }
  removeCategorie(id: string) {
    this.categories = this.categories.filter((categorie) => categorie.id !== id);
  }
  getCategorie(id: string) {
    const categorie = this.categories.filter((categorie) => categorie.id === id);
    console.log(categorie[0]);
    return {...categorie[0]}
  }

  updateCategories(updatedCategorie: ICategorie): void {
    this.categories = this.categories.map((categorie) => {
      return categorie.id === updatedCategorie.id ? updatedCategorie : categorie;
    });
  }
  setCategoriesWithDB(categories: ICategorie[]) {
    this.categories = categories
  }
}
export const categoriesStore = new CategoriesStore();
