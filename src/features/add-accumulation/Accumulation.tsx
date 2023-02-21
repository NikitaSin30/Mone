
import React from 'react';
import AccumulationModal from './AccumulationModal';
import Modal from 'widgets/modals/Modal';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import ErrorModal from 'widgets/modals/ErrorModal';


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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="dark" className="w-6 h-8 md:w-14 md:h-12 ">
                        <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                        <path
                            fillRule="evenodd"
                            d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112
                                9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75
                                0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75
                                 0 001.5 0v-6.75z"
                            clipRule="evenodd"
                        />
                        <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                    </svg>
                </div>
                <p className=" flex-1 text-black font-bold">{CashFlowStore.accumulation}</p>
                <div className="p-2 flex justify-end items-center">
                    <button onClick={onChangeActive}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="dark" className="w-6 h-6">
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75
                                 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                clipRule="evenodd"
                            />
                        </svg>
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
