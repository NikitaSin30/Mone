import { makeAutoObservable } from 'mobx';
import { IUser } from './interfaces.ts/interfaces';
import { IFormAuth } from 'features/auth/interfaces/interfaces';


export class User implements IUser {
    user!: IFormAuth;

    constructor() {
       makeAutoObservable(this)
    }

    setUser(user: IFormAuth) {
        this.user = user;
        console.log(user);
    }
}

export const userStore = new User();
