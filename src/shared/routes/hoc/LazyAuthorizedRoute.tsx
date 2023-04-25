import React from 'react';
import { userStore } from 'shared/store/userStore/UserStore';
import { Navigate, useLocation } from 'react-router-dom';


// React.LazyExoticComponent<(() => JSX.Element)>

export const LazyAuthorizedRoute  = ({ children }: any) => {

    const location = useLocation();


    return userStore.isAuth
        ? <React.Suspense fallback={<span>Loading....</span>}>
            {children}
        </React.Suspense>
        : <Navigate to="/login" state={{ from: location }}/>;
};
