import React from 'react';
import AccumulationModal from 'features/add-accumulation/AccumulationModal';
import Modal from 'widgets/modals/Modal';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import ErrorModal from 'widgets/modals/ErrorModal';
import { AccumulationIcon } from 'pages/main/assets/AccumulationIcon';
import { observer } from 'mobx-react-lite';
import { HOCCreateCard } from 'shared/hoc/HOCCreateCard';



export const AccumulationCard = observer(() => {
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
    const [isErr, setIsErr] = React.useState<boolean>(false);
    const { accumulation } = CashFlowStore;
    const accumulationTitle = 'Накоплено';

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }
    function onChangeErr() {
        setIsErr((prev) => !prev);
    }

    const ContentModal = () => {
        return (
            <>
                {isErr ? (
                    <ErrorModal onChangeActive={onChangeActive} onChangeErr={onChangeErr}>
                        <h2 className="text-xl font-bold text-center">
              У вас нет данной суммы на счёте , чтобы её отложить
                            <br />
                        </h2>
                    </ErrorModal>
                ) : (
                    <AccumulationModal onChangeActive={onChangeActive} onChangeErr={onChangeErr} />
                )}
            </>
        );
    };

    const Card = HOCCreateCard(accumulationTitle,accumulation,AccumulationIcon);

    return (
        <>
            <Card onChangeActive={onChangeActive}/>
            <Modal isActive={isModalActive} onChangeActive={onChangeActive}>
                <ContentModal />
            </Modal>
        </>
    );
});
