import { IDataUserFromDB } from 'api/interfaces';
import { IFormAuth } from 'features/auth/interfaces';




export interface IAuthService {
    login:(dataUserLogin:IFormAuth, switchShowModal: () => void) => any;
    registration:(user: IFormAuth) => any
    setDataFromDB:(userData: IDataUserFromDB) => void
    authenticate:() => void
    logout:() => void
}
