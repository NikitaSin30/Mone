import { action, makeObservable, observable } from 'mobx';
import { IUser } from './interfaces.ts/interfaces';

export class User implements IUser {
    user = { email: '' };
    userId = '';
    constructor() {
        makeObservable(this, {
            user    : observable,
            setUser : action,
        });
    }

    setUser(email: string, userId:string): void {
        this.user.email = email;
        this.userId = userId;
    }
}

export const UserStore = new User();
