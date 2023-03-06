import React from 'react';
import { IncomeIcon } from 'pages/main/assets/IncomeIcon';
import ModalIncome from 'features/add-income/ModalIncome';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { observer } from 'mobx-react-lite';
import { CardItem } from '../CardItem/CardItem';
import { ETitleCard } from 'shared/enums/enums';


export const IncomeCard = observer(() => {
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);

    function switchModalActive() {
        setIsModalActive((IsModalActive) => !IsModalActive);
    }

    const { incomeCard } = ETitleCard;
    const { incomeCash } = CashFlowStore;


    return (
        <>
            <CardItem switchShowModal={switchModalActive} title={incomeCard} money={incomeCash} iconCard={IncomeIcon} />
            <ModalIncome isModalActive={isModalActive} switchShowModal={switchModalActive} />
        </>
    );
});
