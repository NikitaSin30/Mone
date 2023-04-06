import { authAPI } from 'api/AuthApi';
import { userStore } from '../../../shared/store/userStore/UserStore';
import { IFormAuth } from '../interfaces';
import { IAuthService } from './IAuthService';



class AuthService implements IAuthService {
    async login( dataUserLogin:IFormAuth , switchShowModal: () => void) {
        try {
            await authAPI.login(dataUserLogin.email, dataUserLogin.password);
            switchShowModal();
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error();
            }
        }
    }
    async registration(user: IFormAuth, switchStatus: () => void) {

        try {
            const userID = await authAPI.registration(user);

            userStore.setUser(user, userID);
            switchStatus();
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error();

            }
        }
    }
}


export const authService = new AuthService();
