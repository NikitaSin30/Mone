import { authAPI } from 'api/AuthApi';
import { IFormAuth } from '../interfaces/interfaces';
import { userStore } from '../../../shared/store/userStore/UserStore';
import { IAuthService } from './interfaces/IAuthService';



class AuthService implements IAuthService {
    async login(email: string, password: string, switchStatus: () => void) {
        try {
            await authAPI.login(email, password);
             switchStatus()
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }

        }
    }
    async registration(user: IFormAuth, switchStatus: () => void) {

        try {
          const userID = await authAPI.registration(user)
            userStore.setUser(user, userID);
            switchStatus();
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}


export const authService = new AuthService();
