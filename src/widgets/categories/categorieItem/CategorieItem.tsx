import React from 'react';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { DeleteModal } from 'widgets/modals/DeleteModal';
import { ICategorie } from 'shared/store/categoriesStore/interfaces/interfaces';
import { observer } from 'mobx-react-lite';
import { DeleteIcon } from 'widgets/todo/assets/DeleteIcon';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { categoriesService } from 'features/add-categories/service/categoriesService';

export const CategorieItem = observer((props:ICategorie) =>{
    const { categorie, id } = props;

    const { value: isModalActive, toggle: switchShowModal } = useToggle(false);


    function onSuccesDelete(id:string) {
        switchShowModal();
        categoriesService.deleteCategorie(id);
    }

    return (
        <>
            <li
                className="flex-none max-h-[40px] flex px-4 py-2 text-white bg-slate-900  items-center
                          justify-between rounded-md shadow-lg"
            >
                <h2 className="font-semibold text-md">{categorie}</h2>
                <button onClick={switchShowModal} className="hover:scale-110">
                    {DeleteIcon}
                </button>
            </li>
            {isModalActive && <DeleteModal id={id!} categorie={categorie} onSuccesDelete={onSuccesDelete} switchShowModal={switchShowModal} />}
        </>
    );
});
