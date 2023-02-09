import React from 'react';


export interface GlobalContext {
  isLogin: boolean;
  setIsLogin: (a: boolean) => void;
}

export const Context = React.createContext<GlobalContext>({
    isLogin    : false,
    setIsLogin : () => {},
});
