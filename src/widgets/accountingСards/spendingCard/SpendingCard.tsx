import React from 'react';
import { observer } from 'mobx-react-lite';
import SpendingModal from 'features/add-spending/SpendingModal';
import { SpendingIcon } from 'pages/main/assets/SpendingIcon';
import { CardItem } from '../CardItem/CardItem';
import { ETitleCard } from 'shared/enums/enums';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { useToggle } from 'shared/hooks/useToggle/useToggle';



const { spendingCard } = ETitleCard;

export const SpendingCard = observer(() =>{
    const { value: isModalActive, toggle: switchShowModal } = useToggle(false);
    const { spending } = spendingStore;


    return (
        <>
            <CardItem title={spendingCard} money={spending} iconCard={SpendingIcon} switchShowModal={switchShowModal} />
            <SpendingModal isModalActive={isModalActive} switchShowModal={switchShowModal} />
        </>
    );
});
