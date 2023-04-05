
export interface ICategorie {
  categorie: string;
  id?: string;
  spending: number;
}
export interface ICategoriesStore {
  categories: Array<ICategorie>;
  addCatigorie:(categorie: ICategorie)=> void;
  removeCategorie:(id: string)=> void;
}
