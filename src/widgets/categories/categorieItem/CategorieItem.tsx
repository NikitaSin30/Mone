import React from 'react';
import { DeleteModal } from 'widgets/modals/DeleteModal';
import { observer } from 'mobx-react-lite';
import { DeleteIcon } from 'widgets/todo/assets/DeleteIcon';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { ioContainer } from 'api/IoC/ioc';
import ErrorModal from 'widgets/modals/ErrorModal';
import { ICategorieWithID } from 'shared/store/categoriesStore/interfaces';



export const CategorieItem = observer(({ id,categorie,spending }:ICategorieWithID) =>{

    const { value:isErrorModal, toggle: switchIsErrorModal } = useToggle(false);
    const [messageError,setMessageError] = React.useState('');
    const { value: isModalActive, toggle: switchShowModal } = useToggle(false);


    const onSuccesDelete = async(id:string) => {
        try {
            await ioContainer.categoriesService.deleteCategorie(id);
            switchShowModal();
        }
        catch (error) {
            if (error instanceof Error) {
                switchShowModal();
                setMessageError(error.message);
                switchIsErrorModal();
            }
        }
    };

    return (
        <>
            <li
                className=" max-h-[40px] flex px-4 py-2 text-white bg-slate-900  items-center
                          justify-between rounded-md shadow-lg "
            >
                <h2 className="font-semibold text-md">{categorie} : {spending}</h2>
                <button onClick={switchShowModal} className="hover:scale-110">
                    {DeleteIcon}
                </button>
            </li>
            {isModalActive && <DeleteModal id={id} categorie={categorie} onSuccesDelete={onSuccesDelete} switchShowModal={switchShowModal} />}
            {isErrorModal && <ErrorModal title={messageError} switchShowModalErr={switchIsErrorModal}/>}
        </>
    );
});
