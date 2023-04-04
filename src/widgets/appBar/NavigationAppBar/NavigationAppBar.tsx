import React from 'react';
import { Context, GlobalContext } from 'shared/context/context';
import { userStore } from 'shared/store/userStore/UserStore';
import { UserLogin } from '../userLogin/UserLogin';
import { UserNotLogin } from '../userNotLogin/UserNotLogin';



export const NavigationAppBar = () => {
    // const { isLogin } = React.useContext<GlobalContext>(Context);
    const {isAuth} = userStore

    return <>{isAuth ? <UserLogin /> : <UserNotLogin />}</>;
};
