import React from 'react';
import { CardItem } from '../cardItem/CardItem';
import { IncomeIcon } from 'pages/main/assets/assets';
import Modal from 'widgets/modals/Modal';
import ModalIncome from 'features/add-income/ModalIncome';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { observer } from 'mobx-react-lite';



export const IncomeCard = observer(() => {
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }
    const incomeTitle = 'Доход';
    const { incomeCash } = CashFlowStore;

    return (
        <>
            <CardItem title={incomeTitle} onChangeActive={onChangeActive} moneyCard={incomeCash}>
                <IncomeIcon></IncomeIcon>
            </CardItem>
            <Modal isActive={isModalActive} onChangeActive={onChangeActive}>
                <ModalIncome onChangeActive={onChangeActive}></ModalIncome>
            </Modal>
        </>
    );
});
