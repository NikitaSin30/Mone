import React from 'react';
import { observer } from 'mobx-react-lite';
import Modal from 'widgets/modals/Modal';
import SpendingModal from 'features/add-spending/SpendingModal';

export const SpendingCard = observer(() =>{
    const [isActiveModal, setIsModalActive] = React.useState<boolean>(false);

    function onChangeActive() {
        setIsModalActive(prev => !prev);
    }

    return (
        <div className="flex-1 min-h-[130px] flex flex-col overflow-hidden  px-2 bg-white rounded-md shadow-lg">
            <div className="flex gap-2 items-center justify-between">
                <h2 className="text-black font-semibold text-lg">Расход</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="dark" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8 md:w-14 md:h-12 ">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983
                                     0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                    />
                </svg>
            </div>
            <div className="text-black font-bold h-full">12333</div>
            <div className="mb-1 flex justify-end items-center">
                <button onClick={onChangeActive}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="dark" className="w-6 h-6 hover:scale-110">
                        <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75
                                 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <Modal onChangeActive={onChangeActive} isActive={isActiveModal}>
                <SpendingModal onChangeActive={onChangeActive} />
            </Modal>
        </div>
    );
});
