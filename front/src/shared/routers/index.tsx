import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Root } from './Root'
import { Login } from '../../modules/login'
import { Main } from '../../modules/main'
import { LOGIN, REGISTRATION } from './path'
import { Registration } from '../../modules/registration'

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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
    ],
  },
])
