import { IFormAuth } from 'features/auth/interfaces/interfaces';

export interface IUser {
  user: IFormAuth;
  userId : string
  setUser(user: IFormAuth , userId: string): void;
}
