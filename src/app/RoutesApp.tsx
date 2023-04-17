import React from 'react';
import { Route,Navigate } from 'react-router';
import Main from '../pages/main/Main';
import Analysis from '../pages/analysis/Analysis';
import Authorization from '../pages/auth/authorization/Authorization';
import Registration from '../pages/auth/registration/Registration';
import Notebook from 'pages/noteBook/Notebook';
import { ToDo } from 'pages/noteBook/toDo/ToDo';
import { ShopList } from 'pages/noteBook/shopList/ShopList';
import Account from '../pages/account/Account';


export const routesApp = (isAuth:boolean) => {
    return isAuth ? (
        <>
            <Route index element={isAuth ? <Main /> : <Navigate to="/login" />} />
            <Route path="/account" element={isAuth ? <Account /> : <Navigate to="/login" />} />
            <Route path="/analysis" element={isAuth ? <Analysis /> : <Navigate to="/login" />} />
            <Route path="/notebook" element={isAuth ? <Notebook /> : <Navigate to="/login" />} />
            <Route path="/notebook/todo" element={isAuth ? <ToDo /> : <Navigate to="/login" />} />
            <Route path="/notebook/shopList" element={isAuth ? <ShopList /> : <Navigate to="/login" />} />
        </>
    ) : (
        <>
            <Route path="/login" element={!isAuth ? <Authorization /> : <Navigate to="/" />} />
            <Route path="/registration" element={!isAuth ? <Registration /> : <Navigate to="/" />} />
        </>
    );
};
