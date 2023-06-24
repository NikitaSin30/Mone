import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Layout from '../shared/layout/Layout';
import Main from '../pages/main/Main';
import { Account } from 'pages/account/Account';
import Authorization from '../pages/auth/authorization/Authorization';
import Registration from '../pages/auth/registration/Registration';
import { IGlobalContext,Context } from 'shared/context/context';
import Notebook from 'pages/noteBook/Notebook';
import { services } from 'api/IoC/ioc';
import { userStore } from 'shared/store/userStore/UserStore';
import { AuthorizedRoute } from 'shared/routes/hoc/AuthorizedRoute';
import { NotAuthorizedRoute } from 'shared/routes/hoc/NotAuthorizedRoute';
import { LazyAuthorizedRoute } from 'shared/routes/hoc/LazyAuthorizedRoute';
import * as URL from '../shared/routes/path';

const ToDo = React.lazy(() => import('pages/noteBook/toDo/ToDo'));
const ShopList = React.lazy(() => import('pages/noteBook/shopList/ShopList'));
const Analysis = React.lazy(() => import('pages/analysis/Analysis'));



export const App =  observer(() => {

    const { isAuth } = userStore;
    const context: IGlobalContext = {
        isAuth,
    };


    React.useEffect(()=>{
        const authenticate = async() => {
            try {
                await services.auth.authenticate();
            }
            catch (error) {
                if (error instanceof Error) {
                    localStorage.removeItem('wallet');
                }
            }
        };

        authenticate();

    },[]);


    return (
        <>
            <Context.Provider value={context}>
                <Routes>
                    <Route path={URL.BASIC} element={<Layout />}>
                        <Route index element={ <AuthorizedRoute><Main/></AuthorizedRoute> }/>
                        <Route path={URL.ACCOUNT} element={ <AuthorizedRoute><Account/></AuthorizedRoute> } />
                        <Route path={URL.ANALYSIS} element={<LazyAuthorizedRoute><Analysis/></LazyAuthorizedRoute>} />
                        <Route path={URL.NOTEBOOK} element={ <AuthorizedRoute><Notebook/></AuthorizedRoute> } />
                        <Route path={URL.TODO} element={ <LazyAuthorizedRoute><ToDo/></LazyAuthorizedRoute>} />
                        <Route path={URL.SHOPLIST} element={ <LazyAuthorizedRoute><ShopList/></LazyAuthorizedRoute>} />
                        <Route path={URL.LOGIN} element={<NotAuthorizedRoute><Authorization/></NotAuthorizedRoute>} />
                        <Route path={URL.REGISTRATION} element={<NotAuthorizedRoute><Registration/></NotAuthorizedRoute>} />
                    </Route>
                </Routes>
            </Context.Provider>
        </>
    );
});
