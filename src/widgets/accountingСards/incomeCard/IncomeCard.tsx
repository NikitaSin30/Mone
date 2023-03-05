import React from 'react';
import { IncomeIcon } from 'pages/main/assets/IncomeIcon';
import ModalIncome from 'features/add-income/ModalIncome';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { observer } from 'mobx-react-lite';
import { CardItem } from '../CardItem/CardItem';



export const IncomeCard = observer(() => {
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }
    const incomeTitle = 'Доход';
    const { incomeCash } = CashFlowStore;


    return (
        <>
            <CardItem onChangeActive={onChangeActive} title={incomeTitle} money = {incomeCash} iconCard = {IncomeIcon}/>
            <ModalIncome isActive={isModalActive} onChangeActive={onChangeActive}/>
        </>
    );
});
