
import { Route, Routes } from 'react-router-dom';
import Layout from '../shared/layout/Layout';
import Main from '../pages/main/Main';
import PersonalArea from '../pages/account/Account';
import Analysis from '../pages/analysis/Analysis';
import Authorization from '../pages/auth/authorization/Authorization';
import Registration from '../pages/auth/registration/Registration';
import { Context, GlobalContext } from 'shared/context/context';
import Notebook from 'pages/noteBook/Notebook';
import { ToDo } from 'pages/noteBook/toDo/ToDo';
import { ShopList } from 'pages/noteBook/shopList/ShopList';
import { Navigate } from 'react-router-dom';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { routesApp } from './RoutesApp';
import React from 'react';
import { authService } from 'features/auth/service/serviceAuth';
import { IFormAuth } from 'features/auth/interfaces/interfaces';
import { authAPI } from 'api/AuthApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';

export const App =  observer(() => {
    // const { value: isLogin, toggle: onChangeIsLogin } = useToggle(false);
    const {isAuth} = userStore
    console.log(isAuth);

    // const [isLogin, setIsLogin ] = React.useState(false);
    // function onChangeIsLogin() {
    //   setIsLogin(true)
    // }

    const context: GlobalContext = {
        isAuth,
        // onChangeIsLogin() => null
    };

   const routes = routesApp(isAuth);

   React.useEffect(()=>{

     authService.auth()
     .then(() => {
      // userStore.includeIsAuth()
      // console.log(userStore.isAuth);

     })


   },[])



    return (
      <>
        <Context.Provider value={context}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* {routes} */}
            <Route index element={userStore.isAuth ? <Main /> : <Navigate to="/login" />} />
            <Route path="/account" element={userStore.isAuth ? <PersonalArea /> : <Navigate to="/login" />} />
            <Route path="/analysis" element={userStore.isAuth ? <Analysis /> : <Navigate to="/login" />} />
            <Route path="/notebook" element={userStore.isAuth ? <Notebook /> : <Navigate to="/login" />} />
            <Route path="/notebook/todo" element={userStore.isAuth ? <ToDo /> : <Navigate to="/login" />} />
            <Route path="/notebook/shopList" element={userStore.isAuth ? <ShopList /> : <Navigate to="/login" />} />
            <Route path="/login" element={!userStore.isAuth ? <Authorization /> : <Navigate to="/" />} />
            <Route path="/registration" element={!userStore.isAuth ? <Registration /> : <Navigate to="/" />} />
          </Route>
        </Routes>
        {/* {RoutesApp} */}
        </Context.Provider>
      </>
    );
});
