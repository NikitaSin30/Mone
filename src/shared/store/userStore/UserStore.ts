import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { IUser } from './interfaces.ts/interfaces';
import { IFormAuth } from 'features/auth/interfaces/interfaces';


export class User implements IUser {
    user!: IFormAuth;
    userId! : string;

    
    constructor() {
    makeAutoObservable(this);
    }

    setUser(user: IFormAuth, userID : string) {
        this.user = user;
        this.userId = userID;
    }
}

export const userStore = new User();
