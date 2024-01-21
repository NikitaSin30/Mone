import { useMatchesRoutePath } from 'shared/hooks/useMatchesRoutePath'
import { A } from 'shared/ui/a'
import styles from '../index.module.less'

export const HeaderItem = ({ path, title }: { path: string; title: string }) => {
  const isMathesPath = useMatchesRoutePath(path)
  const fontColor = isMathesPath ? 'grey' : 'dark'

  return (
    <li className={styles['header__item']}>
      <A to={path} title={title} color={fontColor} size="lg" />
    </li>
  )
}
