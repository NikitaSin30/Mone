import { H } from 'shared/ui/h'
import styles from './index.module.css'

export const DiagramSpending = () => {
  return (
    <div className={styles['dashbord__diagram-spending']}>
      <H HSize="h3" content="Статистика расходов" fontSize="20" fontWeight="600" />
    </div>
  )
}
