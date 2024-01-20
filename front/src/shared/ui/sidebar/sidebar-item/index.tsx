import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from '../index.module.less'

import { A } from '../../a'

export const SidebarItem = ({ path, iconPath, title }: { path: string; iconPath: string; title: string }) => {
  const location = useLocation()

  const isActive = location.pathname === path ? styles['sidebar__item_active'] : ''

  return (
    <li className={`${styles['sidebar__item']} ${isActive}`}>
      <img className={styles['sidebar__icon']} src={iconPath} />
      <A to={path} title={title} />
    </li>
  )
}
