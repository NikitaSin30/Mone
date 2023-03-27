import React from 'react';
import { observer } from 'mobx-react-lite';
import { CatagoriesList } from './categoriesList/CategoteisList';
import ErrorModal from 'widgets/modals/ErrorModal';
import FormModalCategories from 'features/add-categories/FormModalCategories';
import { ETitleModalErr } from 'shared/enums/enums';
import { AddIcon } from 'pages/main/assets/AddIcon';
import { IContextAnalysis } from 'pages/analysis/context/interfaces/interfaces';
import { ContextAnalysis } from 'pages/analysis/context/context';

const { uniqueCategorie } = ETitleModalErr;

const Categories: React.FC = observer(() => {
    const {isModalErrActiveAnalysis,switchIsModalErrActiveAnalysis,switchIsModalActiveAnalysis} = React.useContext<IContextAnalysis>(ContextAnalysis)


    return (
        <>
            <div className="flex-initial h-80 flex flex-col text-black bg-card rounded-2xl shadow-black shadow-md   py-2 px-1">
                <h2 className="text-center text-xl font-semibold">Ваши категории</h2>
                <div className="flex-1 flex">
                    <CatagoriesList />
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={switchIsModalActiveAnalysis} className="rounded-full overflow-hidden hover:scale-110 ">
                        {AddIcon}
                    </button>
                </div>
            </div>
            <FormModalCategories />
            {isModalErrActiveAnalysis && <ErrorModal title={uniqueCategorie} switchShowModalErr={switchIsModalErrActiveAnalysis} />}
        </>
    );
});

export default Categories;
