import React from 'react';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { userStore } from 'shared/store/userStore/UserStore';


export const ProtectedAuthorizedRoute = ( WrappedComponent : () => JSX.Element ) => {

    return () => {
        return userStore.isAuth ? <WrappedComponent/> : <Navigate to="/login" />;
    };

};
