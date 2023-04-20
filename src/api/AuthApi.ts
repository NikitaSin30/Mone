import { IFormAuth } from 'features/auth/interfaces';
import { checkError } from 'shared/helpers/checkError';
import { IAuthApi, IDataFromDB } from './interfaces';
import * as PATH from './path';


class AuthApi implements IAuthApi {

    async registration<T>(user: IFormAuth):Promise<T> {
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

            return await response.json();

        }
        catch (error) {
            throw checkError(error);
        }
    }

    async login<T>(dataLogin:IFormAuth) : Promise<T> {
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

            return await response.json();

        }
        catch (error) {
            throw checkError(error);
        }
    }

    async authenticate<T>(token:string): Promise<T> {

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
            throw checkError(error);
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
            throw checkError(error);
        }
    }
}


export const authAPI = new AuthApi();
