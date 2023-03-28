import { IFormAuth } from 'features/auth/interfaces/interfaces';

export interface IUser {
  user: IFormAuth;
  setUser(user: IFormAuth): void;
}
