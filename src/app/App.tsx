import { Route, Routes } from 'react-router-dom';
import Layout from '../shared/layout/Layout';
import Main from '../pages/main/Main';
import PersonalArea from '../pages/account/Account';
import Analysis from '../pages/analysis/Analysis';
import Authorization from '../pages/auth/authorization/Authorization';
import Registration from '../pages/auth/registration/Registration';
import { ContextGlobal, IContextGlobal } from 'shared/context/context';
import Notebook from 'pages/noteBook/Notebook';
import { ToDo } from 'pages/noteBook/toDo/ToDo';
import { ShopList } from 'pages/noteBook/shopList/ShopList';
import { Navigate } from 'react-router-dom';
import { useToggle } from 'shared/hooks/useToggle/useToggle';



export const App = () => {
    const { value: isLogin, toggle: onChangeIsLogin } = useToggle(false);

    const context: IContextGlobal = {
        isLogin,
        onChangeIsLogin,
    };


    return (
        <>
            <ContextGlobal.Provider value={context}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={isLogin ? <Main /> : <Navigate to="/login" />} />
                        <Route path="/account" element={isLogin ? <PersonalArea /> : <Navigate to="/login" />} />
                        <Route path="/analysis" element={isLogin ? <Analysis /> : <Navigate to="/login" />} />
                        <Route path="/notebook" element={isLogin ? <Notebook /> : <Navigate to="/login" />} />
                        <Route path="/notebook/todo" element={isLogin ? <ToDo /> : <Navigate to="/login" />} />
                        <Route path="/notebook/shopList" element={isLogin ? <ShopList /> : <Navigate to="/login" />} />
                        <Route path="/login" element={!isLogin ? <Authorization /> : <Navigate to="/" />} />
                        <Route path="/registration" element={!isLogin ? <Registration /> : <Navigate to="/" />} />
                    </Route>
                </Routes>
            </ContextGlobal.Provider>
        </>
    );
};
