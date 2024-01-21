import { Outlet } from 'react-router'
import { useLocation } from 'react-router-dom'
import { AppContext } from 'shared/context'
import { Sidebar } from 'shared/ui/sidebar'
import { Header } from 'shared/ui/header'

const pathNotAuth = ['/login', '/registration']

export const Root = () => {
  const location = useLocation()
  const isAuth = !pathNotAuth.includes(location.pathname)
  const AppDataContext = {
    isAuth,
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
