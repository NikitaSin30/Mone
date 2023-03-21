import React from 'react';
import { Context, GlobalContext } from 'shared/context/context';
import { UserLogin } from '../userLogin/UserLogin';
import { UserNotLogin } from '../userNotLogin/UserNotLogin';



export const NavigationAppBar = () => {
    const { isLogin } = React.useContext<GlobalContext>(Context);

    return <>{isLogin ? <UserLogin /> : <UserNotLogin />}</>;
};
