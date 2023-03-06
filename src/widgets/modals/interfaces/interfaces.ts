export interface IModal {
  switchShowModal: () => void;
  switchShowModalErr?: () => void;
  isModalActive: boolean;
}

export interface IError {
  switchShowModalErr: () => void;
  title:string
}

export interface IDeleteModal {
  onSuccesDelete: (id: string) => void;
  switchShowModal: () => void;
  categorie: string;
  id: string;
}
