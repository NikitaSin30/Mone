import React from 'react';


export interface GlobalContext {
  isAuth: boolean;
  // onChangeIsLogin: () => void,
}

export const Context = React.createContext<GlobalContext>({
    isAuth         : false,
    // onChangeIsLogin : () => null,
});
