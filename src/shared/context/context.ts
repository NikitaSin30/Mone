import React from 'react';


export interface IContextGlobal {
  isLogin: boolean;
  onChangeIsLogin: () => void,
  // isModalActive:boolean
  // switchisModalActive:() => void
  // isErrModalActive: boolean
  // switchShowModalErr:() => void
}

export const ContextGlobal = React.createContext<IContextGlobal>({
  isLogin         : false,
  onChangeIsLogin : () => null,
  // isModalActive:false,
  // switchisModalActive:() => null,
  // isErrModalActive: false,
  // switchShowModalErr:() => null,
});
