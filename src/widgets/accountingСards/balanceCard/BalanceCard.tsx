import { observer } from 'mobx-react-lite';
import { WalletIcon } from 'pages/main/assets/WalletIcon';
import { CardItem } from '../CardItem/CardItem';
import { ETitleCard } from 'shared/enums/enums';
import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';


const { balanceCard } = ETitleCard;

export const BalanceCard = observer(() => {
    const { moneyAccount } = balanceStore;


    return (
        <>
            <CardItem title={balanceCard} money={moneyAccount} iconCard={WalletIcon} />
        </>
    );
});
