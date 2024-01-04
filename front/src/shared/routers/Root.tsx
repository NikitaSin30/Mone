import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { Sidebar } from '../ui/sidebar'

export const Root = () => {
  return (
    <>
      <Sidebar />

      <Outlet />
    </>
  )
}
