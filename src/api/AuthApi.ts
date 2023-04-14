import { IFormAuth } from 'features/auth/interfaces';
import { IAuthApi } from './interfaces';
import * as PATH from './path';


class AuthApi implements IAuthApi {

    async registration(user: IFormAuth) {
        try {
            const response = await fetch(PATH.REGISTRATION, {
                method  : 'POST',
                headers : { 'Content-Type': 'application/json' },
                body    : JSON.stringify(user),
            });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }

            const result = await response.json();

            return result;
        }
        catch (error) {
            throw error;
        }
    }


    async login(dataLogin:IFormAuth) {
        try {
            const response = await fetch(PATH.LOGIN, {
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify(dataLogin),
            });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }
            const result = await response.json();

            return result;
        }
        catch (error) {
            console.log(error);

            throw error;
        }
    }

}



export const authAPI = new AuthApi();
