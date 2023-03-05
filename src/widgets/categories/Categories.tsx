import { observer } from 'mobx-react-lite';
import React from 'react';
import { CatagoriesList } from './categoriesList/CategoteisList';
import ErrorModal from 'widgets/modals/ErrorModal';
import FormModalCategories from 'features/add-categories/FormModalCategories';



const Categories:React.FC = observer(() =>{
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
    const [isErr, setIsErr] = React.useState<boolean>(false);
    const titleError = '  Категрии должны быть уникальны';


    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }

    function onChangeErr() {
        setIsErr((prev) => !prev);
    }


    return (
        <>
            <div className="flex-initial h-80 flex flex-col text-black bg-card rounded-2xl shadow-black shadow-md   py-2 px-1">
                <h2 className="text-center text-xl font-semibold">Ваши категории</h2>
                <div className="flex-1 flex">
                    <CatagoriesList />
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={onChangeActive} className="rounded-full overflow-hidden hover:scale-110 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <FormModalCategories isActive={isModalActive} onChangeActive={onChangeActive} onChangeErr={onChangeErr} />
            {isErr && <ErrorModal title={titleError} onChangeErr={onChangeErr} />}
        </>
    );
});


export default Categories;
