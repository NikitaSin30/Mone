import React from 'react';
import { observer } from 'mobx-react-lite';
import Modal from 'widgets/modals/Modal';
import SpendingModal from 'features/add-spending/SpendingModal';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { SpendingIcon } from 'pages/main/assets/SpendingIcon';
import { HOCCreateCard } from 'shared/hoc/HOCCreateCard';



export const SpendingCard = observer(() =>{
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
    const { spentMoney } = CashFlowStore;
    const spentTitle = 'Потрачено';

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }

    const Card = HOCCreateCard(spentTitle,spentMoney,SpendingIcon);

    return (
        <>
            <Card onChangeActive={onChangeActive}/>
            <Modal onChangeActive={onChangeActive} isActive={isModalActive}>
                <SpendingModal onChangeActive={onChangeActive} />
            </Modal>
        </>
    );
});
