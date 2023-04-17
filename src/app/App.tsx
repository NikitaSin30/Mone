import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';

import Layout from '../shared/layout/Layout';
import Main from '../pages/main/Main';
import Account from 'pages/account/Account';
import Analysis from '../pages/analysis/Analysis';
import Authorization from '../pages/auth/authorization/Authorization';
import Registration from '../pages/auth/registration/Registration';
import { IGlobalContext,Context } from 'shared/context/context';
import Notebook from 'pages/noteBook/Notebook';
import { ToDo } from 'pages/noteBook/toDo/ToDo';
import { ShopList } from 'pages/noteBook/shopList/ShopList';
import { routesApp } from './RoutesApp';
import { authService } from 'features/auth/service/serviceAuth';
import { userStore } from 'shared/store/userStore/UserStore';


export const App =  observer(() => {

    const { isAuth } = userStore;

    const context: IGlobalContext = {
        isAuth,
    };

    const routes = routesApp(isAuth);

    React.useEffect(()=>{

        authService.authenticate();

    },[]);


    return (
        <>
            <Context.Provider value={context}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={userStore.isAuth ? <Main /> : <Navigate to="/login" />} />
                        <Route path="/account" element={userStore.isAuth ? <Account /> : <Navigate to="/login" />} />
                        <Route path="/analysis" element={userStore.isAuth ? <Analysis /> : <Navigate to="/login" />} />
                        <Route path="/notebook" element={userStore.isAuth ? <Notebook /> : <Navigate to="/login" />} />
                        <Route path="/notebook/todo" element={userStore.isAuth ? <ToDo /> : <Navigate to="/login" />} />
                        <Route path="/notebook/shopList" element={userStore.isAuth ? <ShopList /> : <Navigate to="/login" />} />
                        <Route path="/login" element={!userStore.isAuth ? <Authorization /> : <Navigate to="/" />} />
                        <Route path="/registration" element={!userStore.isAuth ? <Registration /> : <Navigate to="/" />} />
                    </Route>
                </Routes>
            </Context.Provider>
        </>
    );
});
