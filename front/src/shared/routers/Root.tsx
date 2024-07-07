import { Outlet } from 'react-router'
import { useLocation } from 'react-router-dom'
import { AppContext } from 'shared/context'
import { Sidebar } from 'modules/sidebar'
import { Header } from 'shared/ui/header'
import React from 'react'

export const Root = () => {
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem('accessToken') ? true : false)
  const AppDataContext = {
    isAuth,
    setIsAuth,
  }
  return (
    <>
      <AppContext.Provider value={AppDataContext}>
        {isAuth ? <Sidebar /> : <Header />}
        <Outlet />
      </AppContext.Provider>
    </>
  )
}
