import { IFormAuth } from 'features/auth/interfaces/interfaces';

export interface IUser {
  user: IFormAuth;
  isAuth:boolean;
  setUser(user: IFormAuth): void;
  setIsAuth:(isAuthStatus:boolean) => void
}
