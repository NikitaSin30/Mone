import { IFormAuth } from '../../interfaces/interfaces';


export interface IAuthService {
    login:(email: string, password: string, switchStatus: () => void) => Promise<void>;
    registration:(user: IFormAuth, switchStatus: () => void) => Promise<void>
}
