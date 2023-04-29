import React from 'react';


export interface IGlobalContext {
  isAuth: boolean;

}

export const Context = React.createContext<IGlobalContext>({
    isAuth : false,

});
