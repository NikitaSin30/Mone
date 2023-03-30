
export interface ICategorie {
  categorie: string;
  id: string;
  spentMoney: number;
  key: string | null;
}

export interface ICategoriesStore {
  categories: Array<ICategorie>;
  addCatigorie: (categorie: ICategorie) => void;
  removeCategorie: (id: string) => void;
  updateCategories: (updatedCategorie: ICategorie) => void;
  setCategoriesWithDB:(categories: ICategorie[]) => void
}
