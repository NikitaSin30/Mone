import { IFormAuth } from 'features/auth/interfaces';
import { checkError } from 'shared/service/helpers/checkError';
import { IAuthApi, IDataFromDB, IResponseMessage } from './interfaces';
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

            return await response.json();

        }
        catch (error) {
            throw checkError(error);
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

            return await response.json();

        }
        catch (error) {
            throw checkError(error);
        }
    }

    async authenticate(token:string) {

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


export default AuthApi;
