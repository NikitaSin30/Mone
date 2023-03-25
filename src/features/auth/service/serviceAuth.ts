import { auth } from 'server/Auth';
import { IFormAuth } from '../interfaces/interfaces';

class AuthService {
    async login(email: string, password: string, switchStatus: () => void) {
        try {
            await auth.login(email, password, switchStatus);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }

        }
    }
    async registration(user: IFormAuth, switchStatus: () => void) {
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


export const authService = new AuthService();
