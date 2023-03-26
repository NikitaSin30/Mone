import { authAPI } from 'api/AuthApi';
import { IFormAuth } from '../interfaces/interfaces';
import { userStore } from '../../../shared/store/userStore/UserStore';
import { IAuthService } from './IAuthService';



class AuthService implements IAuthService {
    async login(dataLogin:IFormAuth , switchStatus: () => void) {
        try {
            await authAPI.login(dataLogin, switchStatus);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error();
            }

        }
    }
    async registration(user: IFormAuth, switchStatus: () => void) {
        try {
             authAPI.registration(user)
            //  switchStatus();
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}


export const authService = new AuthService();
