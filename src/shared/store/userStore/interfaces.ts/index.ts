import { IFormAuth } from 'features/auth/interfaces';

export interface IUser {
  user: IFormAuth;
  setUserFromDB(user: IFormAuth): void;
}
