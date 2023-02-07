import React from "react"

type User = {
  firstName?: string;
  phoneNumber?: string;
  email: string;
  country?: string;
  nickName?: string;
};

export interface GlobalContext {
  isLogin:boolean,
  setIsLogin:(a:boolean )=> void;
}



export  const Context = React.createContext<GlobalContext>({
  isLogin: false,
  setIsLogin: () => {},
});
