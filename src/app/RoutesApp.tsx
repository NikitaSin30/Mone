import React from 'react'
import { Route, Routes,Navigate} from 'react-router'
import Layout from '../shared/layout/Layout';
import Main from '../pages/main/Main';
import PersonalArea from '../pages/account/Account';
import Analysis from '../pages/analysis/Analysis';
import Authorization from '../pages/auth/authorization/Authorization';
import Registration from '../pages/auth/registration/Registration';
import Notebook from 'pages/noteBook/Notebook';
import { ToDo } from 'pages/noteBook/toDo/ToDo';
import { ShopList } from 'pages/noteBook/shopList/ShopList';

export const routesApp = (isAuth:boolean) => {
     if (isAuth) {
      return (
        <>
          {/* <Routes> */}
            {/* <Route path="/" element={<Layout />}> */}
              <Route index element={<Main />} />
              <Route path="/account" element={<PersonalArea />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/notebook" element={<Notebook />} />
              <Route path="/notebook/todo" element={<ToDo />} />
              <Route path="/notebook/shopList" element={<ShopList />} />
              <Route path="/login" element={<Authorization />} />
              <Route path="/registration" element={<Registration />} />
              {/* <Navigate to="/" /> */}
            {/* </Route> */}
          {/* </Routes> */}
        </>
      )
    }

      return (
        <>
          {/* <Routes> */}
            {/* <Route path='/login' element={<Layout />}> */}
              <Route path="/login" element={<Authorization />} />
              <Route path="/registration" element={<Registration />} />
            {/* </Route> */}
          {/* </Routes> */}
        </>
      );
}
