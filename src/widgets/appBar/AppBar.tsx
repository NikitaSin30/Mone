import React from 'react';
import { Context } from 'shared/context/context';
import UserNotLogin from 'widgets/appBar/UserNotLogin';
import UserLogin from 'widgets/appBar/UserLogin';
import { GlobalContext } from 'shared/context/context';


function AppBar(): React.ReactElement {
    const { isLogin } = React.useContext<GlobalContext>(Context);


    return (
        <nav className="flex  max-w-full  justify-center items-start md:py-1 min-w-[50px] lg:min-w-[100px] bg-slate-900 rounded-md shadow-lg  ">
            {isLogin ? <UserLogin /> : <UserNotLogin />}
        </nav>
    );
}

export default AppBar;
