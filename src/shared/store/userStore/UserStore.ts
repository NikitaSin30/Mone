import { makeAutoObservable } from 'mobx';
import { IUser } from './interfaces.ts/interfaces';
import { IFormAuth } from 'features/auth/interfaces/interfaces';


export class User implements IUser {
  user!: IFormAuth;
  isAuth
  constructor() {
    this.isAuth = localStorage.getItem('wallet') ? true : false
    makeAutoObservable(this);
  }

  setUser(user: IFormAuth) {
    this.user = user;
    console.log(this.user);

  }
  setIsAuth(isAuthStatus:boolean) {
    this.isAuth = isAuthStatus
    console.log(this.isAuth);
  }
}

export const userStore = new User();


