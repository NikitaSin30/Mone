import { IFormAuth } from '../interfaces/interfaces';


export interface IAuthService {
    login:(dataUserLogin:IFormAuth, switchShowModal: () => void) => Promise<void>;
    registration:(user: IFormAuth, switchShowModal: () => void) => Promise<void>
}
