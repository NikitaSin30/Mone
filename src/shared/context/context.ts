import React from "react"

export interface GlobalContext {
  user: {};
  setUser: ({}) => void;
  isLogin:boolean,
  setIsLogin:(a:boolean )=> void;
}

export  const Context = React.createContext <GlobalContext>({
    user:{},
    setUser:()=>{},
    isLogin: false,
    setIsLogin:()=> {}
})
