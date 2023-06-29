import { IBaseResponse, IFormAuth } from 'interfaces';




export interface IAuthService {
    login:(dataUserLogin:IFormAuth) => Promise<void>;
    registration:(user: IFormAuth) => Promise<IBaseResponse>
    authenticate:() => Promise<void>
    logout:() => Promise<void>
}
