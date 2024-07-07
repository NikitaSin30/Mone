import styles from './index.module.less'
import Plus from 'assets/Plus.svg'
import TrendDown from 'assets/TrendDown.svg'
import TrendUp from 'assets/TrendUp.svg'
import { H } from 'shared/ui/h'

type Title = 'Мой баланс' | 'Доход' | 'Расход' | 'Накопление'

export const BalanceInfo = ({
  title,
  sum,
  currency,
  percentageOfChange,
}: {
  title: Title
  sum: number
  currency: 'RUB'
  percentageOfChange: number
}) => {
  const isPossitiveDynamyc = percentageOfChange > 0
  const trendIcon = isPossitiveDynamyc ? TrendUp : TrendDown
  const percerntStyle = isPossitiveDynamyc
    ? styles['dashbord__header-item-percent_up']
    : styles['dashbord__header-item-percent_down']
  return (
    <div className={styles['dashbord__header-item']}>
      <div className={styles['dashbord__header-item-title']}>
        <H HSize="h3" fontSize="16" fontWeight="400" content={title} />
        {title !== 'Мой баланс' && (
          <button>
            <img src={Plus} className={styles['dashbord__header-item-icon']} />
          </button>
        )}
      </div>
      <div className={styles['dashbord__header-item-info']}>
        <div>
          <span className={styles['dashbord__header-item-sum']}>{sum}</span>{' '}
          <span className={styles['dashbord__header-item-currency']}>{currency}</span>
        </div>
        <div className={styles['dashbord__header-item-dynamyc']}>
          <img src={trendIcon} alt="trendIcon" />
          <span className={`${styles['dashbord__header-item-percent']} ${percerntStyle}  `}>
            {percentageOfChange}%
          </span>
        </div>
      </div>
    </div>
  )
}
