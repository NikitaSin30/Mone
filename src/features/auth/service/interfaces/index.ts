import { IResponseMessage } from 'api/interfaces';
import { IFormAuth } from 'features/auth/interfaces';




export interface IAuthService {
    login:(dataUserLogin:IFormAuth) => Promise<void>;
    registration:(user: IFormAuth) => Promise<IResponseMessage>
    authenticate:() => Promise<void>
    logout:() => Promise<void>
}
