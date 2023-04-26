import React from 'react';

import { userStore } from 'shared/store/userStore/UserStore';
import { UserLogin } from '../userLogin/UserLogin';
import { UserNotLogin } from '../userNotLogin/UserNotLogin';



export const NavigationAppBar = () => {

    const { isAuth } = userStore;

    return <>{isAuth ? <UserLogin data-testid='userLogin' /> : <UserNotLogin />}</>;
};
