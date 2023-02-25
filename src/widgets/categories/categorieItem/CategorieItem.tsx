import React from 'react';
import { CategoriesStore } from 'shared/store/CategoriesStore';
import Modal from 'widgets/modals/Modal';
import { DeleteModal } from 'widgets/modals/DeleteCategorie';
import { ICategorie } from 'shared/store/interfaces/interfaces';
import { observer } from 'mobx-react-lite';
import { DeleteIcon } from 'pages/main/assets/assets';

export const CategorieItem = observer((props:ICategorie) =>{
    const { categorie, id } = props;

    const [isModalActive,setIsModalActive] = React.useState<boolean>(false);

    function onChangeActive():void {
        setIsModalActive(prev => !prev);
    }
    function onSuccesDelete(id:string) {
        setIsModalActive(prev => !prev);
        CategoriesStore.removeCategorie(id);
    }

    return (
        <>
            <li
                className="flex-none max-h-[40px] flex px-4 py-2 text-white bg-slate-900  items-center
                          justify-between rounded-md shadow-lg"
            >
                <h2 className="font-semibold text-md">{categorie}</h2>
                <button onClick={onChangeActive} className='hover:scale-110'>
                    <DeleteIcon/>
                </button>
            </li>
            <Modal isActive={isModalActive} onChangeActive={onChangeActive}>
                <DeleteModal id={id!} categorie={categorie} onSuccesDelete={onSuccesDelete} onChangeActive={onChangeActive}/>
            </Modal>
        </>
    );
});
