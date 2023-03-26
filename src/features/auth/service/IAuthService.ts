import { IFormAuth } from '../interfaces/interfaces';


export interface IAuthService {
    login:(dataLogin: IFormAuth, switchStatus: () => void) => Promise<void>;
    registration:(user: IFormAuth, switchStatus: () => void) => Promise<void>
}
