import styles from './index.module.less'

export const DashbordHeader = ({ children }: { children: React.ReactNode }) => {
  return <header className={`${styles['dashbord__header']} grid`}>{children}</header>
}
