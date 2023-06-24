import { makeAutoObservable } from 'mobx';
import { IUser } from './interfaces.ts';
import { IFormAuth } from 'features/auth/interfaces';



export class UserStore implements IUser {
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
