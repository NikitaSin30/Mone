import { IFormAuth } from 'features/auth/interfaces';
import { IAuthApi } from './interfaces';
import { REGISTRATION_URL,LOGIN_URL,LOGOUT_URL,AUTHENTICATION_URL } from './path';
import { request } from './request/request';


class AuthApi implements IAuthApi {

    async registration(user: IFormAuth) {
        try {
            const response = await request(REGISTRATION_URL,'POST',{ user });

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

    async login(dataLogin:IFormAuth) {
        try {
            const response = await request(LOGIN_URL,'POST', dataLogin);


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

    async authenticate(token:string) {

        try {
            const response = await request(AUTHENTICATION_URL,'GET', token);

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


    async logout(idUser:string) {

        try {

            const response = await request(LOGOUT_URL,'POST',{ idUser });

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
