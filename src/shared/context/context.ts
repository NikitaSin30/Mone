import React from 'react';


export interface GlobalContext {
  isLogin: boolean;
  onChangeIsLogin: () => void,
}

export const Context = React.createContext<GlobalContext>({
    isLogin         : false,
    onChangeIsLogin : () => null,
});
