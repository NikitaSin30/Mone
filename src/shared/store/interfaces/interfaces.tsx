export interface ICategorie {
  categorie: string;
  id: string;
}

export type TypeUser = {
  email: string;
};

export interface IUser {
  user: TypeUser;
  setUser(email: string): void;
}
