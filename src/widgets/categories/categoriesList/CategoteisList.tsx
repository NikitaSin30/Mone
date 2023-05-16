import React from 'react';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { CategorieItem } from '../categorieItem/CategorieItem';
import { observer } from 'mobx-react-lite';
import { Context, IGlobalContext } from 'shared/context/context';
import { ioContainer } from 'api/IoC/ioc';
import ErrorModal from 'widgets/modals/ErrorModal';


export const CatagoriesList = observer(() => {

    const { switchIsErrorModal,
        switchIsShowDeleteModal,
        isShowErrorModal,
        messageError,
        setMessageError } = React.useContext<IGlobalContext>(Context);

    const { categories } = categoriesStore;

    const onSuccesDelete = async(id:string) => {
        try {
            await ioContainer.categoriesService.deleteCategorie(id);
            switchIsShowDeleteModal();
        }
        catch (error) {
            if (error instanceof Error) {
                switchIsShowDeleteModal();
                setMessageError(error.message);
                switchIsErrorModal();
            }
        }
    };

    return (
        <>
            <ul className="flex flex-wrap flex-col gap-2 w-full pt-2 ">
                {categories?.map((categorie) => {
                    return <CategorieItem key={categorie.id} categorie={categorie} onSuccesDelete={onSuccesDelete} />;
                })}
            </ul>
            {isShowErrorModal && <ErrorModal title={messageError} switchShowModalErr={switchIsErrorModal}/>}
        </>
    );
});

