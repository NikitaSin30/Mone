import React from 'react';
import { IncomeIcon } from 'pages/main/assets/IncomeIcon';
import ModalIncome from 'features/add-income/ModalIncome';
import { observer } from 'mobx-react-lite';
import { CardItem } from '../CardItem/CardItem';
import { ETitleCard } from 'shared/enums/enums';
import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { ContextMain } from 'pages/main/context/context';
import { IContextMain } from 'pages/main/context/interfaces';



const { incomeCard } = ETitleCard;

export const IncomeCard = observer(() => {
    const { switchIsModalActiveIncome } = React.useContext<IContextMain>(ContextMain);
    const { income } = incomeStore;

    return (
        <>
            <CardItem switchShowModal={switchIsModalActiveIncome} title={incomeCard} money={income} iconCard={IncomeIcon} />
            <ModalIncome/>
        </>
    );
});
