import React from 'react';
import { userStore } from 'shared/store/userStore/UserStore';
import { Navigate } from 'react-router-dom';


export const LazyProtectedRoute  = (LazyComponent: React.LazyExoticComponent<(() => JSX.Element)>) => {
    return () => {
        return userStore.isAuth
            ? <React.Suspense fallback={<span>Loading....</span>}>
                <LazyComponent/>
            </React.Suspense>
            : <Navigate to="/login" />;
    };
};
