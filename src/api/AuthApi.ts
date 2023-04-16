import { IFormAuth } from 'features/auth/interfaces';
import { IAuthApi, IDataFromDB } from './interfaces';
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
            const result:IDataFromDB = await response.json();

            return result;
        }
        catch (error) {
            console.log(error);

            throw error;
        }
    }

    async authentication(token:string) {

        try {
            const response = await fetch(PATH.AUTHENTICATION, {
                method  : 'GET',
                headers : {
                    Authorization : `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }

            return await response.json();

        }
        catch (error) {
            localStorage.removeItem('wallet');

            return error;
        }
    }


    async logout(id:string) {

        try {
            const response = await fetch(PATH.LOGOUT, {
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({ id }),
            });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }

            return await response.json();

        }
        catch (error) {
            throw error;
        }
    }
}


export const authAPI = new AuthApi();
