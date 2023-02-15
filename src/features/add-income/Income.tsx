import React from 'react';
import ModalIncome from './ModalIncome';
import Modal from 'widgets/modals/Modal';
import { CashFlowStore } from 'shared/store/CashFlowStore';


function Income() {
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
    const incomeTitle = 'Укажите доход';

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }

    const ModalWindow = () => {
        return (
            <Modal isActive={isModalActive} onChangeActive={onChangeActive}>
                <ModalIncome incomeTitle={incomeTitle} onChangeActive={onChangeActive} />
            </Modal>
        );
    };


    return (
        <>
            <div className="flex-1  flex flex-col px-2 bg-white  rounded-md shadow-lg">
                <div className="flex gap-2 items-center justify-between">
                    <h2 className="text-slate-900 font-semibold text-lg">Доход</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="dark" className="w-6 h-8 md:w-14 md:h-12 ">
                        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                        <path
                            fillRule="evenodd"
                            d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010
                                    1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <p className=" flex-1 text-black font-bold">{CashFlowStore.incomeCash}</p>
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
            <ModalWindow></ModalWindow>
        </>
    );
}

export default Income;
