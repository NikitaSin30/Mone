
export interface ICategorie {
  categorie: string;
  id: string;
  key: string | null;
  spending: number;
}

export interface ICategoriesStore {
  categories: Array<ICategorie>;
  addCatigorie: (categorie: ICategorie) => void;
  removeCategorie: (id: string) => void;
  updateCategories: (updatedCategorie: ICategorie) => void;
  setCategoriesWithDB:(categories: ICategorie[]) => void
}
