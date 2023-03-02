import React from 'react';
import { Context } from 'shared/context/context';
import UserNotLogin from 'widgets/appBar/userNotLogin/UserNotLogin';
import UserLogin from 'widgets/appBar/userLogin/UserLogin';
import { GlobalContext } from 'shared/context/context';



function AppBar(): React.ReactElement {
    const { isLogin } = React.useContext<GlobalContext>(Context);

    const contentNav = isLogin ? <UserLogin /> : <UserNotLogin />;

    return (
        <nav className="flex  max-w-full  justify-center items-start md:py-1 min-w-[50px]
         lg:min-w-[100px] bg-nav rounded-md shadow-lg  ">
            { contentNav }
        </nav>
    );
}

export default AppBar;
