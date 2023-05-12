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

    setIsAuth(isAuthStatus:boolean) {
        this.isAuth = isAuthStatus;
    }

    setUserFromDB(user: IFormAuth) {
        this.user = user;
        console.log(this.user);
    }

    get idUser() {
        return this.user._id;
    }
}

export const userStore = new User();
