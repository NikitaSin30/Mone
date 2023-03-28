import { action, makeObservable, observable } from 'mobx';
import { IUser } from './interfaces.ts/interfaces';
import { IFormAuth } from 'features/auth/interfaces/interfaces';


export class User implements IUser {
    user!: IFormAuth;
    constructor() {
        makeObservable(this, {
            user    : observable,
            setUser : action,
        });
    }

    setUser(user: IFormAuth) {
        this.user = user;
        console.log(this.user);

    }
}

export const userStore = new User();
