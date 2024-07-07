import { H } from 'shared/ui/h'
import styles from './index.module.less'

export const DiagramAccumulation = () => {
  return (
    <div className={styles['dashbord__analysis-accumulation']}>
      <H HSize="h3" content="Накопления" fontSize="20" fontWeight="600" />
    </div>
  )
}
