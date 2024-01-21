import styles from '../index.module.less'
import { useMatchesRoutePath } from 'shared/hooks/useMatchesRoutePath'
import { A } from '../../a'

export const SidebarItem = ({ path, iconPath, title }: { path: string; iconPath: string; title: string }) => {
  const isMatchesPath = useMatchesRoutePath(path)
  const isActive = isMatchesPath ? styles['sidebar__item_active'] : ''
  const fontColor = isMatchesPath ? 'white' : 'litleGrey'

  return (
    <li className={`${styles['sidebar__item']} ${isActive}`}>
      <img className={styles['sidebar__icon']} src={iconPath} />
      <A to={path} title={title} color={fontColor} />
    </li>
  )
}
