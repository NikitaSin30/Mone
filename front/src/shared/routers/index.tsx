import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Root } from './Root'
import { Authorization } from '../../modules/authorization'
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
        element: <Authorization />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      // {
      //   path: "/login",
      //   element: <Authorization />,
      // },
      // {
      //   path: "/login",
      //   element: <Authorization />,
      // },
    ],
  },
])
