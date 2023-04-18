import { Navigate } from 'react-router-dom';
import { userStore } from 'shared/store/userStore/UserStore';



export const ProtectedNotAuthorizedRoute = ( WrappedComponent : () => JSX.Element ) => {

    return () => {
        return !userStore.isAuth ? <WrappedComponent/> : <Navigate to="/" />;
    };

};
