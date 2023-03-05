export interface IModal {
  isActive: boolean;
  onChangeActive: () => void;
  children: React.ReactNode;
}

export interface IError {
  onChangeErr: () => void;
  title:string
}

export interface IDeleteModal {
  onSuccesDelete: (id: string) => void;
  onChangeActive: () => void;
  categorie: string;
  id: string;
}
