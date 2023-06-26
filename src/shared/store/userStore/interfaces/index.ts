import { IFormAuth } from 'interfaces';

export interface IUserStore {
  user: IFormAuth;
  isAuth:boolean;
  setUserFromDB(user: IFormAuth): void;
  setIsAuth:(isAuthStatus:boolean) => void
}
