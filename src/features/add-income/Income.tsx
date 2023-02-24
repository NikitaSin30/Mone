import React from 'react';
import ModalIncome from './ModalIncome';
import Modal from 'widgets/modals/Modal';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { IncomeIcon, AddIcon } from 'pages/main/assets/assets';

function Income() {
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);

    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }

    return (
        <>
            <div className="flex-1 min-h-[130px] flex flex-col overflow-hidden  px-2 bg-white rounded-md shadow-lg">
                <div className="flex gap-2 items-center justify-between">
                    <h2 className="text-slate-900 font-semibold text-lg">Доход</h2>
                    <IncomeIcon />
                </div>
                <div className="text-black font-bold h-full">{CashFlowStore.incomeCash}</div>
                <button onClick={onChangeActive} className="hover:scale-110 self-end">
                    <AddIcon />
                </button>
            </div>
            <Modal isActive={isModalActive} onChangeActive={onChangeActive}>
                <ModalIncome onChangeActive={onChangeActive} />
            </Modal>
        </>
    );
}

export default Income;
