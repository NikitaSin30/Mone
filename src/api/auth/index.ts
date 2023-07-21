import { IFormAuth } from 'interfaces';
import { IAuthAPI } from '../interfaces';
import { REGISTRATION_URL,LOGIN_URL,LOGOUT_URL,AUTHENTICATION_URL } from '../path';
import { request } from '../request';


export class AuthAPI implements IAuthAPI {

    async registration(user: IFormAuth) {
        try {
            const response = await request(REGISTRATION_URL,'POST', user );

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

    async login<T>(dataLogin:IFormAuth) : Promise<T> {
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

    async authenticate<T>(token:string): Promise<T> {

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


    async logout(userID:string) {

        try {

            const response = await request(LOGOUT_URL,'POST',{ userID });

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
