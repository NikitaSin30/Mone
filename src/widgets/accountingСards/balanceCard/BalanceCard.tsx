import React from 'react';
import { CardItem } from '../cardItem/CardItem';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { observer } from 'mobx-react-lite';
import { WalletIcon } from 'pages/main/assets/assets';



export const BalanceCard = observer(() => {

    const incomeTitle = 'На счёте';
    const { moneyAccount } = CashFlowStore;

    return (
        <>
            <CardItem title={incomeTitle} moneyCard={moneyAccount}>
                <WalletIcon></WalletIcon>
            </CardItem>
        </>
    );
});
