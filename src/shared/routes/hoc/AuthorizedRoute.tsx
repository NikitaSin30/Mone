import React from 'react';
import { Route } from 'react-router-dom';
import { Navigate,useLocation } from 'react-router-dom';
import { userStore } from 'shared/store/userStore/UserStore';



export const AuthorizedRoute = ( { children } : any ) => {

    const location = useLocation();

    return userStore.isAuth ? children : <Navigate to="/login" state={{ from: location }} />;

};
