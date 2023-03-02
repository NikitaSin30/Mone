import { CashFlowStore } from 'shared/store/CashFlowStore';
import { observer } from 'mobx-react-lite';
import { WalletIcon } from 'pages/main/assets/WalletIcon';
import { HOCCreateCard } from 'shared/hoc/HOCCreateCard';


export const BalanceCard = observer(() => {

    const moneyInAccountTitle = 'На cчёте';
    const { moneyAccount } = CashFlowStore;

    const Card = HOCCreateCard(moneyInAccountTitle,moneyAccount,WalletIcon);

    return (
        <>
            <Card/>
        </>
    );
});
