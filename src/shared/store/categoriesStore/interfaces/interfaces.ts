
export interface ICategorie {
  categorie: string;
  id?: string;
  spentMoney: number;
  key: string;
}
export interface ICategorie2 {
  categorie: string;
  id?: string;
  spentMoney: number;

}
export interface ICategoriesStore {
  categories: Array<ICategorie>;
  addCatigorie:(categorie: ICategorie)=> void;
  removeCategorie:(id: string)=> void;
}
