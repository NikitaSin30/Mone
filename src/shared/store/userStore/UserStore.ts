import { makeAutoObservable } from 'mobx';
import { IUser } from './interfaces.ts';
import { IFormAuth } from 'features/auth/interfaces';


export class User implements IUser {
    user: IFormAuth;
    userId: string;

    constructor() {
        makeAutoObservable(this);
    }

    setUserFromDB(user: IFormAuth) {
        this.user = user;
    }
}

export const userStore = new User();
