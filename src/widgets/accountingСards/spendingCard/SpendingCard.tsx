import React from 'react';
import { observer } from 'mobx-react-lite';
import Modal from 'widgets/modals/Modal';
import SpendingModal from 'features/add-spending/SpendingModal';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { SpendingIcon } from 'pages/main/assets/assets';
import { CardItem } from '../cardItem/CardItem';



export const SpendingCard = observer(() =>{
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }

    const { spentMoney } = CashFlowStore;
    const spentTitle = 'Потрачено';

    return (
        <>
            <CardItem title={spentTitle} moneyCard={spentMoney} onChangeActive={onChangeActive}>
                <SpendingIcon />
            </CardItem>
            <Modal onChangeActive={onChangeActive} isActive={isModalActive}>
                <SpendingModal onChangeActive={onChangeActive} />
            </Modal>
        </>
    );
});
