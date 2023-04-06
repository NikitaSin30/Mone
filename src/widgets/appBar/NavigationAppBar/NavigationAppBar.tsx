import React from 'react';
import { ContextGlobal, IContextGlobal } from 'shared/context/context';
import { UserLogin } from '../userLogin/UserLogin';
import { UserNotLogin } from '../userNotLogin/UserNotLogin';



export const NavigationAppBar = () => {
    const { isLogin } = React.useContext<IContextGlobal>(ContextGlobal);

    return <>{isLogin ? <UserLogin /> : <UserNotLogin />}</>;
};
