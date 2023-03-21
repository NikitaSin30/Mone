import React, { SyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from 'features/add-spending/interfaces/interfaces';
import { Select } from 'widgets/select/Select';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IModal } from 'widgets/modals/interfaces/interfaces';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { serviceSpending } from './service/serviceSpending';



const SpendingModal = (props: IModal) => {
    const { switchShowModal, isModalActive } = props;
    const { value: isActiveSelect, toggle: toggleActiveSelect } = useToggle(false);
    const [valueSelect, setValueSelect] = React.useState<string>('');
    const selected = valueSelect ? valueSelect : 'Выберити категию';
    const styleModal = isModalActive ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';
    const { categories } = categoriesStore;

    const {
        register,
        setValue,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<IFormSpending>({ mode: 'onBlur' });


    async function addNewSpending( newSpending : IFormSpending) {

        try {
            await serviceSpending.midlewareAddSpending(newSpending);
        }
        catch (error) {
            console.log('Ошибка');
        }

        cleanInputs();
        switchShowModal();
    }

    function cleanInputs() {
        setValueSelect('');
        reset();
    }

    function getValueSelect(categorie:string):void {
        setValue('categorie', categorie);
        setValueSelect(categorie);
    } ;

    function onСloseModal(e: SyntheticEvent) {
        e.stopPropagation();
        switchShowModal();
    }

    return (
        <>
            <div className={styleModal} onClick={switchShowModal}>
                <div className="flex flex-1 w-full gap-1 flex-col  bg text-white bg-slate-900  rounded-md shadow-lg md:w-1/2 p-1 ">
                    <button onClick={(e) => onСloseModal(e)} className="rounded-full w-6 h-6 self-end overflow-hidden hover:scale-110">
                        {CloseIcon}
                    </button>
                    <form
                        className="flex flex-1 w-100 gap-1 flex-col  bg text-white py-6 px-8  "
                        onSubmit={handleSubmit(addNewSpending)}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="text-xl font-bold text-center">Добавить трату</span>
                        <div className="flex justify-between">
                            <span>Категория трат</span>
                        </div>
                        <Select
                            isActiveSelect={isActiveSelect}
                            categories={categories}
                            getValueSelect={getValueSelect}
                            selected={selected}
                            toggleActiveSelect={toggleActiveSelect}
                            register={register}
                            labelTitle="categorie"
                        />
                        <div className="flex justify-between">
                            <span>Сумма</span> {errors?.spentMoney && <span className="text-red-700">{errors?.spentMoney?.message || 'Errors'}</span>}
                        </div>
                        <Input type="number" labelTitle="spentMoney" register={register} />
                        <Button title="Добавить" isValid={isValid} />
                    </form>
                </div>
            </div>
        </>
    );
};

export default SpendingModal;
