import React from 'react';
import AccumulationModal from 'features/add-accumulation/AccumulationModal';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import ErrorModal from 'widgets/modals/ErrorModal';
import { AccumulationIcon } from 'pages/main/assets/AccumulationIcon';
import { observer } from 'mobx-react-lite';
import { CardItem } from '../CardItem/CardItem';



export const AccumulationCard = observer(() => {
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
    const [isErr, setIsErr] = React.useState<boolean>(false);
    const { accumulation } = CashFlowStore;
    const accumulationTitle = 'Накоплено';

    const titleError = 'У вас нет данной суммы на счёте';

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }
    function onChangeErr() {
        setIsErr((prev) => !prev);
    }

    return (
        <>
            <CardItem title={accumulationTitle} money={accumulation} iconCard={AccumulationIcon} onChangeActive={onChangeActive} />
            <AccumulationModal isActive={isModalActive} onChangeActive={onChangeActive} onChangeErr={onChangeErr} />
            {isErr && <ErrorModal title={titleError} onChangeErr={onChangeErr} />}
        </>
    );
});
