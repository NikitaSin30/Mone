import { CashFlowStore } from 'shared/store/CashFlowStore';
import { observer } from 'mobx-react-lite';
import { WalletIcon } from 'pages/main/assets/WalletIcon';
import { CardItem } from '../CardItem/CardItem';



export const BalanceCard = observer(() => {

    const moneyInAccountTitle = 'На счёте';
    const { moneyAccount } = CashFlowStore;

    return (
        <>
            <CardItem title={moneyInAccountTitle} money={moneyAccount} iconCard={WalletIcon}/>
        </>
    );
});
