import { Navigate } from 'react-router-dom';
import { userStore } from 'shared/store/userStore/UserStore';



export const NotAuthorizedRoute = ( { children } : any ) => {

    return !userStore.isAuth ? children : <Navigate to="/" />;

};
