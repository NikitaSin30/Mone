import { IFormAuth } from 'features/auth/interfaces';
import { checkError } from 'shared/helpers/checkError';
import { IAuthApi, IDataFromDB, IResponseMessage } from './interfaces';
import * as PATH from './path';
import { request } from './request/request';


class AuthApi implements IAuthApi {

    async registration(user: IFormAuth) {
        try {
            const response = await request(PATH.REGISTRATION,'POST',{ user });

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
            const response = await request(PATH.LOGIN,'POST',{ dataLogin });


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
            const response = await request(PATH.AUTHENTICATION,'GET', token);

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

            const response = await request(PATH.LOGOUT,'POST',{ id });

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
