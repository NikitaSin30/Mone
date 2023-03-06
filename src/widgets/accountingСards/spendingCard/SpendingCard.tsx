import React from 'react';
import { observer } from 'mobx-react-lite';
import SpendingModal from 'features/add-spending/SpendingModal';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { SpendingIcon } from 'pages/main/assets/SpendingIcon';
import { CardItem } from '../CardItem/CardItem';
import { ETitleCard } from 'shared/enums/enums';


export const SpendingCard = observer(() =>{
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
    const { spentMoney } = CashFlowStore;
    const { spendingCard } = ETitleCard;

    function switchShowModal() {
        setIsModalActive((isModalActive) => !isModalActive);
    }

    return (
        <>
            <CardItem title={spendingCard} money={spentMoney} iconCard={SpendingIcon} switchShowModal={switchShowModal} />
            <SpendingModal isModalActive={isModalActive} switchShowModal={switchShowModal} />
        </>
    );
});
