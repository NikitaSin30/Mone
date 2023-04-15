import { IDataUserFromDB } from 'api/interfaces';
import { IFormAuth } from 'features/auth/interfaces';




export interface IAuthService {
    login:(dataUserLogin:IFormAuth, switchShowModal: () => void) => Promise<void>;
    registration:(user: IFormAuth) => Promise<void>
    setDataFromDB:(userData: IDataUserFromDB) => void
    auth:() => void
    logout:() => void
}
