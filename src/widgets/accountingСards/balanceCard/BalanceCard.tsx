import { CashFlowStore } from 'shared/store/CashFlowStore';
import { observer } from 'mobx-react-lite';
import { WalletIcon } from 'pages/main/assets/WalletIcon';
import { CardItem } from '../CardItem/CardItem';
import { ETitleCard } from 'shared/enums/enums';


export const BalanceCard = observer(() => {

    const { balanceCard } = ETitleCard;
    const { moneyAccount } = CashFlowStore;

    return (
        <>
            <CardItem title={balanceCard} money={moneyAccount} iconCard={WalletIcon} />
        </>
    );
});
