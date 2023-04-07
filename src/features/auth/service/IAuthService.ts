import { IFormAuth } from '../interfaces';


export interface IAuthService {
    login:(dataLogin: IFormAuth, switchStatus: () => void) => Promise<void>;
    registration:(user: IFormAuth, switchStatus: () => void) => Promise<void>
}
