import { H } from 'shared/ui/h'
import styles from './index.module.css'

export const HistoryOperation = () => {
  return (
    <div className={styles['dashbord__history-operation']}>
      <H HSize="h3" content="История транзакций" fontSize="20" fontWeight="600" />
    </div>
  )
}
