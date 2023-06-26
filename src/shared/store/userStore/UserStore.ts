import { makeAutoObservable } from 'mobx';
import { IUserStore } from './interfaces/index.js';
import { IFormAuth } from 'interfaces/index.js';



export class UserStore implements IUserStore {
    public user: IFormAuth;
    public isAuth: boolean;

    constructor() {
        this.isAuth = localStorage.getItem('wallet') ? true : false;
        makeAutoObservable(this);
    }

    public setIsAuth(isAuthStatus:boolean) {
        this.isAuth = isAuthStatus;
    }

    public setUserFromDB(user: IFormAuth) {
        this.user = user;
    }

    get userID() {
        return this.user._id;
    }
}

export const userStore = new UserStore();
