import React from 'react';


export interface IContextGlobal {
  isLogin: boolean;
  onChangeIsLogin: () => void,
}

export const ContextGlobal = React.createContext<IContextGlobal>({
    isLogin         : false,
    onChangeIsLogin : () => null,
});
