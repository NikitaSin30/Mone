import { makeAutoObservable } from 'mobx';
import { IUser } from './interfaces.ts';
import { IFormAuth } from 'features/auth/interfaces';


export class User implements IUser {
    user: IFormAuth;
    isAuth: boolean;

    constructor() {
        this.isAuth = localStorage.getItem('wallet') ? true : false;
        makeAutoObservable(this);
    }

    setUser(user: IFormAuth) {
        this.user = user;
        console.log(this.user);

    }
    setIsAuth(isAuthStatus:boolean) {
        this.isAuth = isAuthStatus;
        console.log(this.isAuth);
    }

    setUserFromDB(user: IFormAuth) {
        this.user = user;
    }
}

export const userStore = new User();
