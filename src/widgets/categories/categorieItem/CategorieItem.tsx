import React from 'react';
import { DeleteModal } from 'widgets/modals/DeleteModal';
import { observer } from 'mobx-react-lite';
import { DeleteIcon } from 'widgets/todo/assets/DeleteIcon';
import { Context, IGlobalContext } from 'shared/context/context';
import { ICategorieItem } from './interfaces';



export const CategorieItem = observer(({ categorie,onSuccesDelete }:ICategorieItem) =>{

    const {
        isShowDeleteModal,
        switchIsShowDeleteModal,
    } = React.useContext<IGlobalContext>(Context);


    return (
        <>
            <li
                className=" max-h-[40px] flex px-4 py-2 text-white bg-slate-900  items-center
                          justify-between rounded-md shadow-lg "
            >
                <h2 className="font-semibold text-md">{categorie.categorie} : {categorie.spending}</h2>
                <button onClick={switchIsShowDeleteModal} className="hover:scale-110">
                    {DeleteIcon}
                </button>
            </li>
            {isShowDeleteModal
            && <DeleteModal
                id={categorie.id}
                title={categorie.categorie}
                onSuccesDelete={onSuccesDelete}
                switchShowModal={switchIsShowDeleteModal} />}
        </>
    );
});
