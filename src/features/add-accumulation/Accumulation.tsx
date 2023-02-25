import React from 'react';
import AccumulationModal from './AccumulationModal';
import Modal from 'widgets/modals/Modal';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import ErrorModal from 'widgets/modals/ErrorModal';
import { AccumulationIcon , AddIcon } from 'pages/main/assets/assets';
export const Accumulation = () => {
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
    const [isErr,setIsErr] = React.useState<boolean>(false);

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }
    function onChangeErr() {
        setIsErr(prev => !prev);
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



    return (
        <>
            <div className="flex-1  flex flex-col px-2 bg-white  rounded-md shadow-lg ">
                <div className="flex items-center justify-between">
                    <h2 className="text-black font-semibold text-lg">Накоплено</h2>
                    <AccumulationIcon/>
                </div>
                <p className=" flex-1 text-black font-bold">{CashFlowStore.accumulation}</p>
                <div className="p-2 flex justify-end items-center">
                    <button onClick={onChangeActive}>
                        <AddIcon/>
                    </button>
                </div>
            </div>
        ;
            <Modal isActive={isModalActive} onChangeActive={onChangeActive}>
                <ContentModal/>
            </Modal>
        </>
    );
};
