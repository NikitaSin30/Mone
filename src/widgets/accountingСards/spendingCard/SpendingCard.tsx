import React from 'react';
import { observer } from 'mobx-react-lite';
import SpendingModal from 'features/add-spending/SpendingModal';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { SpendingIcon } from 'pages/main/assets/SpendingIcon';
import { CardItem } from '../CardItem/CardItem';



export const SpendingCard = observer(() =>{
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
    const { spentMoney } = CashFlowStore;
    const spentTitle = 'Потрачено';

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }

    return (
        <>
            <CardItem title={spentTitle} money={spentMoney} iconCard={SpendingIcon} onChangeActive={onChangeActive}/>
            <SpendingModal isActive={isModalActive} onChangeActive={onChangeActive} />
        </>
    );
});
