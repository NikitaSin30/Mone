export interface ICategorie {
  categorie: string;
}

export interface INewCategorie {
  categorie: string;
  id: string;
}

export interface IFormModalCategories {
  onChangeActive: () => void;
  onChangeErr: () => void;
}
