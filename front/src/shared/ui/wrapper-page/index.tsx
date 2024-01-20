import { React, ReactNode } from 'react'
import styles from './index.module.less'

export const WrapperPage = ({ children }: { children: ReactNode }) => {
  return <div className={styles['wrapper-page']}>{children}</div>
}
