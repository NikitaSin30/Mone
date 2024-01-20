import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { Sidebar } from '../ui/sidebar'
import { WrapperPage } from '../ui/wrapper-page'

export const Root = () => {
  return (
    <>
      <Sidebar />
      <WrapperPage>
        <Outlet />
      </WrapperPage>
    </>
  )
}
