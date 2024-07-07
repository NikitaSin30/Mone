import { H } from 'shared/ui/h'
import styles from './index.module.less'
export const DiagramAnalysis = () => {
  return (
    <div className={styles['dashbord__analysis-diagram']}>
      <H HSize="h3" content="Аналитика" fontSize="20" fontWeight="600" />
      <span>lore</span>
    </div>
  )
}
