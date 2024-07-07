import styles from './index.module.less'
import { ACCOUNTS, ANALYTICS, ASSETS, DASHBOARD, LOGIN, PROFILE, SETTINGS } from 'shared/routers/path'
import DashbordIcon from 'assets/DashbordIcon.svg'
import AccountsIcon from 'assets/AccountsIcon.svg'
import AnalyticsIcon from 'assets/AnalyticsIcon.svg'
import AssetsIcon from 'assets/AssetsIcon.svg'
import ProfileIcon from 'assets/ProfileIcon.svg'
import SettingsIcon from 'assets/SettingsIcon.svg'
import SignOutIcon from 'assets/SignOutIcon.svg'

import { SidebarItem } from './sidebar-item'
import { SidebarCheckbox } from './sidebar-chexbox'
import { logoutQuery, useMutationLogout } from './api'

export const Sidebar = () => {
  const { mutate } = useMutationLogout()

  const logout = () => {
    mutate()
  }

  return (
    <nav className={styles.sidebar}>
      <h1 className={styles['sidebar__logo']}>LOGO</h1>
      <ul className={styles['sidebar__list']}>
        <SidebarItem path={DASHBOARD} iconPath={DashbordIcon} title="Дашборд" />
        <SidebarItem path={ACCOUNTS} iconPath={AccountsIcon} title="Счета" />
        <SidebarItem path={ANALYTICS} iconPath={AnalyticsIcon} title="Аналитика" />
        <SidebarItem path={ASSETS} iconPath={AssetsIcon} title="Активы" />
        <SidebarItem path={PROFILE} iconPath={ProfileIcon} title="Профиль" />
        <SidebarItem path={SETTINGS} iconPath={SettingsIcon} title="Настройка" />
      </ul>
      <footer className={styles['sidebar__botton']}>
        <ul className={styles['sidebar__list']}>
          <SidebarCheckbox />
          <button onClick={logout}>Выйти</button>
          {/* <SidebarItem path={LOGIN} iconPath={SignOutIcon} title="Выйти" /> */}
        </ul>
      </footer>
    </nav>
  )
}
