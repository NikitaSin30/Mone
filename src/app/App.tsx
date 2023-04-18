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
import { authService } from 'features/auth/service/serviceAuth';
import { userStore } from 'shared/store/userStore/UserStore';
import { ProtectedAuthorizedRoute } from 'shared/routes/hoc/ProtectedAuthorizedRoute';
import { ProtectedNotAuthorizedRoute } from 'shared/routes/hoc/ProtectedNotAuthorizedRoute';
import { LazyProtectedRoute } from 'shared/routes/hoc/LazyProtectedRoute';
import * as URL from '../shared/routes/path';


const ToDo = React.lazy(() => import('pages/noteBook/toDo/ToDo'));
const ShopList = React.lazy(() => import('pages/noteBook/shopList/ShopList'));
const Analysis = React.lazy(() => import('pages/analysis/Analysis'));


const MainProtected = ProtectedAuthorizedRoute(Main);
const AccountProtected = ProtectedAuthorizedRoute(Account);
const NotebookProtected = ProtectedAuthorizedRoute(Notebook);

const AuthorizationProtected = ProtectedNotAuthorizedRoute(Authorization);
const RegistrationProtected = ProtectedNotAuthorizedRoute(Registration);

const TodoLazyProtected = LazyProtectedRoute(ToDo);
const ShopListLazyProtected = LazyProtectedRoute(ShopList);
const AnalysisLazyProtected = LazyProtectedRoute(Analysis);




export const App =  observer(() => {

    const { isAuth } = userStore;

    const context: IGlobalContext = {
        isAuth,
    };


    React.useEffect(()=>{

        authService.authenticate();

    },[]);


    return (
        <>
            <Context.Provider value={context}>
                <Routes>
                    <Route path={URL.BASIC} element={<Layout />}>
                        <Route index element={<MainProtected/> }/>
                        <Route path={URL.ACCOUNT} element={ <AccountProtected/>} />
                        <Route path={URL.ANALYSIS} element={ <AnalysisLazyProtected/>} />
                        <Route path={URL.NOTEBOOK} element={ <NotebookProtected/>} />
                        <Route path={URL.TODO} element={ <TodoLazyProtected />} />
                        <Route path={URL.SHOPLIST} element={ <ShopListLazyProtected/>} />
                        <Route path={URL.LOGIN} element={<AuthorizationProtected/>} />
                        <Route path={URL.REGISTRATION} element={ <RegistrationProtected/>} />
                    </Route>
                </Routes>
            </Context.Provider>
        </>
    );
});
