import { action, makeObservable, observable } from 'mobx';
import { IUser } from './interfaces.ts';
import { IFormAuth } from 'features/auth/interfaces';


export class User implements IUser {
    user!: IFormAuth;
    userId! : string;
    constructor() {
        makeObservable(this, {
            user    : observable,
            setUser : action,
        });
    }

    setUser(user: IFormAuth, userID : string) {
        this.user = user;
        this.userId = userID;
        console.log(this.user);

    }
}

export const userStore = new User();
