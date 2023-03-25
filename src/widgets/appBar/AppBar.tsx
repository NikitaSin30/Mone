import React from 'react';
import { NavigationAppBar } from './NavigationAppBar/NavigationAppBar';



const AppBar = (): React.ReactElement => {


    return (
        <nav className="flex  max-w-full  justify-center items-start md:py-1 min-w-[50px]
         lg:min-w-[100px] bg-nav rounded-md shadow-lg  ">
            <NavigationAppBar/>
        </nav>
    );
};

export default AppBar;
