import { createBrowserRouter } from 'react-router-dom'
import { Root } from './Root'
import { Login } from 'modules/login'
import { Main } from 'modules/main'
import { ACCOUNTS, ANALYTICS, ASSETS, DASHBOARD, LOGIN, PROFILE, REGISTRATION, SETTINGS } from './path'
import { Registration } from 'modules/registration'
import { Profile } from 'modules/profile'
import { Dashbord } from 'modules/dashbord'
import { Settings } from 'modules/settings'
import { Assets } from 'modules/assets'
import { Accounts } from 'modules/accounts'
import { Analytics } from 'modules/analytics'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: LOGIN,
        element: <Login />,
      },
      {
        path: REGISTRATION,
        element: <Registration />,
      },
      {
        path: DASHBOARD,
        element: <Dashbord />,
      },
      {
        path: ACCOUNTS,
        element: <Accounts />,
      },
      {
        path: ANALYTICS,
        element: <Analytics />,
      },
      {
        path: ASSETS,
        element: <Assets />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
      {
        path: SETTINGS,
        element: <Settings />,
      },
    ],
  },
])
