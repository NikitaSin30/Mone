import React from 'react';


export interface IGlobalContext {
  isAuth: boolean;
  messageError:string
  setMessageError:(text:string) => void;
  isShowErrorModal:boolean;
  switchIsErrorModal:()=>void
  isShowDeleteModal:boolean
  switchIsShowDeleteModal:()=>void

}

export const Context = React.createContext<IGlobalContext>({
    isAuth                  : false,
    messageError            : '',
    setMessageError         : () => null,
    isShowErrorModal        : false,
    switchIsErrorModal      : ()=>null,
    isShowDeleteModal       : false,
    switchIsShowDeleteModal : ()=>null,
});
