import { makeAutoObservable } from 'mobx';
import { IUserStore } from './interfaces.ts';
import { IFormAuth } from 'features/auth/interfaces';


export  class UserStore implements IUserStore {
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
    }

    get idUser() {
        return this.user._id;
    }
}

export const userStore = new UserStore();
