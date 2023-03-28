import { authAPI } from 'api/AuthApi';
import { IFormAuth } from '../interfaces/interfaces';
import { userStore } from '../../../shared/store/userStore/UserStore';
import { IAuthService } from './IAuthService';



class AuthService implements IAuthService {
    async login(dataLogin:IFormAuth , switchUI: () => void) {
        try {
           const res = await authAPI.login(dataLogin);
        //    тут надо метод чтобы цеплять текст ui ?
        console.log(res);

           switchUI()
           userStore.setUser(res.user)

        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error();
            }

        }
    }
    async registration(user: IFormAuth, switchUI: () => void) {
        try {
            const res =  await authAPI.registration(user)
        //    тут надо метод чтобы цеплять текст ui ?
         switchUI();
         userStore.setUser(res.createdUser)
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}


export const authService = new AuthService();
