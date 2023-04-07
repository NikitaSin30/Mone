import { makeAutoObservable } from 'mobx';
import { IUser } from './interfaces.ts';
import { IFormAuth } from 'features/auth/interfaces';


export class User implements IUser {
    user: IFormAuth;
    userId: string;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user: IFormAuth) {
        this.user = user;
        console.log(user);
    }
}

export const userStore = new User();
