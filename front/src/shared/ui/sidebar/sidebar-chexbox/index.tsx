import React from 'react'
import styles from '../index.module.less'
import DarkThemeIcon from 'assets/DarkThemeIcon.svg'
import BrightThemeIcon from 'assets/BrightThemeIcon.svg'

export const SidebarCheckbox = () => {
  const [isBrightTheme, setIsBrightTheme] = React.useState(true)

  const setBrightTheme = () => {
    setIsBrightTheme(true)
  }
  const setDarkTheme = () => {
    setIsBrightTheme(false)
  }
  const activeBrightTheme = isBrightTheme ? styles['sidebar__checkbox-wrapper-icon_active-bright'] : ''
  const activeDarkTheme = isBrightTheme ? '' : styles['sidebar__checkbox-wrapper-icon_active-dark']

  return (
    <div className={styles['sidebar__checkbox']}>
      <div
        onClick={setBrightTheme}
        className={`${styles['sidebar__checkbox-wrapper-icon']} ${activeBrightTheme}`}
      >
        <img className={styles['sidebar__checkbox-bright-icon']} src={BrightThemeIcon} alt="" />
      </div>
      <div
        onClick={setDarkTheme}
        className={`${styles['sidebar__checkbox-wrapper-icon']} ${activeDarkTheme}`}
      >
        <img className={styles['sidebar__checkbox-dark-icon']} src={DarkThemeIcon} alt="" />
      </div>
    </div>
  )
}
