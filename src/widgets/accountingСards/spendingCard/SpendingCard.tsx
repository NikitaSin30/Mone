import React from 'react';
import { observer } from 'mobx-react-lite';
import Modal from 'widgets/modals/Modal';
import SpendingModal from 'features/add-spending/SpendingModal';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { SpendingIcon, AddIcon } from 'pages/main/assets/assets';
export const SpendingCard = observer(() =>{
    const [isActiveModal, setIsModalActive] = React.useState<boolean>(false);
    const { spentMoney } = CashFlowStore;

    function onChangeActive() {
        setIsModalActive(prev => !prev);
    }

    return (
        <div className="flex-1 min-h-[130px] flex flex-col overflow-hidden  px-2 bg-white rounded-md shadow-lg">
            <div className="flex gap-2 items-center justify-between">
                <h2 className="text-black font-semibold text-lg">Расход</h2>
                <SpendingIcon/>
            </div>
            <div className="text-black font-bold h-full">{spentMoney}</div>
            <button onClick={onChangeActive} className='hover:scale-110 self-end'>
                <AddIcon/>
            </button>
            <Modal onChangeActive={onChangeActive} isActive={isActiveModal}>
                <SpendingModal onChangeActive={onChangeActive} />
            </Modal>
        </div>
    );
});
