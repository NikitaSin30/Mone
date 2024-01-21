import { HeaderItem } from './header-item'
import { LOGIN, REGISTRATION } from 'shared/routers/path'
import styles from './index.module.less'

export const Header = () => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header__logo']}>LOGO</h1>
      <nav className={styles['header__navigation']}>
        <ul className={styles['header__list']}>
          <HeaderItem path={LOGIN} title="Войти" />
          <HeaderItem path={REGISTRATION} title="Регистрация" />
        </ul>
      </nav>
    </header>
  )
}
