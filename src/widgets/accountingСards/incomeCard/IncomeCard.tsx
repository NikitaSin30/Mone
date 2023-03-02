import React from 'react';
import { IncomeIcon } from 'pages/main/assets/IncomeIcon';
import Modal from 'widgets/modals/Modal';
import ModalIncome from 'features/add-income/ModalIncome';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { observer } from 'mobx-react-lite';
import { HOCCreateCard } from 'shared/hoc/HOCCreateCard';


export const IncomeCard = observer(() => {
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }
    const incomeTitle = 'Доход';
    const { incomeCash } = CashFlowStore;

    const Card = HOCCreateCard(incomeTitle, incomeCash,IncomeIcon);

    return (
        <>
            <Card onChangeActive={onChangeActive}></Card>
            <Modal isActive={isModalActive} onChangeActive={onChangeActive}>
                <ModalIncome onChangeActive={onChangeActive}></ModalIncome>
            </Modal>
        </>
    );
});
