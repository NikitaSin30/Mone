import styles from './index.module.css'
import { DashbordHeader } from './header/DashbordHeader'
import { DiagramAccumulation } from './accumulation/DiagramAccumulation'
import { DiagramAnalysis } from './analysis/DiagramAnalysis'
import { DiagramSpending } from './spending/DiagramSpending'
import { HistoryOperation } from './operations/HistoryOperation'
import { BalanceInfo } from './balance-info/DashbordBalanceInfo'

export const Dashbord = () => {
  return (
    <div className={`${styles['dashbord']} `}>
      <DashbordHeader>
        <BalanceInfo title="Мой баланс" sum={130000} currency="RUB" percentageOfChange={2.4} />
        <BalanceInfo title="Доход" sum={60000} currency="RUB" percentageOfChange={5.4} />
        <BalanceInfo title="Расход" sum={13000} currency="RUB" percentageOfChange={1.4} />
        <BalanceInfo title="Накопление" sum={35000} currency="RUB" percentageOfChange={-4} />
      </DashbordHeader>
      <div className="grid">
        <DiagramAnalysis />
        <DiagramAccumulation />
      </div>
      <div className="grid">
        <DiagramSpending />
        <HistoryOperation />
      </div>
    </div>
  )
}
