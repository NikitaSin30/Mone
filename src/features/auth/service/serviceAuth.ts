import { auth } from 'server/Auth';
import { IFormAuth } from '../interfaces/interfaces';

class ServiceAuth {
    async midlewareLogin(email: string, password: string, switchStatus: () => void) {
        try {
            auth.login(email, password, switchStatus);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }

        }
    }
    async midlewareRegistration(user: IFormAuth, switchStatus: () => void) {
        try {
            await auth.registration(user,switchStatus);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}


export const serviceAuth = new ServiceAuth();
