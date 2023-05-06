import React from 'react';
import { observer } from 'mobx-react-lite';
import SpendingModal from 'features/add-spending/SpendingModal';
import { SpendingIcon } from 'pages/main/assets/SpendingIcon';
import { CardItem } from '../CardItem/CardItem';
import { ETitleCard } from 'shared/enums/enums';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { IContextMain } from 'pages/main/context/interfaces';
import { ContextMain } from 'pages/main/context/context';


const { spendingCard } = ETitleCard;

export const SpendingCard = observer(() =>{
    const { switchIsModalActiveSpending } = React.useContext<IContextMain>(ContextMain);
    const { spending } = spendingStore;


    return (
        <>
            <CardItem title={spendingCard} money={spending} iconCard={SpendingIcon} switchShowModal={switchIsModalActiveSpending} />
            <SpendingModal />
        </>
    );
});
