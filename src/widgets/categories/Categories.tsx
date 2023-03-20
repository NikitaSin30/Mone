import React from 'react';
import { observer } from 'mobx-react-lite';
import { CatagoriesList } from './categoriesList/CategoteisList';
import ErrorModal from 'widgets/modals/ErrorModal';
import FormModalCategories from 'features/add-categories/FormModalCategories';
import { ETitleModalErr } from 'shared/enums/enums';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { AddIcon } from 'pages/main/assets/AddIcon';

const { uniqueCategorie } = ETitleModalErr;

const Categories: React.FC = observer(() => {
    const { value: isModalActive, toggle: switchShowModal } = useToggle(false);
    const { value: isErrModalActive, toggle: switchShowModalErr } = useToggle(false);

    return (
        <>
            <div className="flex-initial h-80 flex flex-col text-black bg-card rounded-2xl shadow-black shadow-md   py-2 px-1">
                <h2 className="text-center text-xl font-semibold">Ваши категории</h2>
                <div className="flex-1 flex">
                    <CatagoriesList />
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={switchShowModal} className="rounded-full overflow-hidden hover:scale-110 ">
                        {AddIcon}
                    </button>
                </div>
            </div>
            <FormModalCategories isModalActive={isModalActive} switchShowModal={switchShowModal} switchShowModalErr={switchShowModalErr} />
            {isErrModalActive && <ErrorModal title={uniqueCategorie} switchShowModalErr={switchShowModalErr} />}
        </>
    );
});

export default Categories;
