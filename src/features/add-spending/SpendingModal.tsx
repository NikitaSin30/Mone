import React from 'react';
import { useForm } from 'react-hook-form';
import { CategoriesStore } from 'shared/store/CategoriesStore';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { ICategorie } from 'shared/store/interfaces/interfaces';
import { ISpendingModal, IFormSpending } from 'features/add-spending/interfaces/interfaces';
import { Select } from 'widgets/select/Select';
import { InputMoney } from 'widgets/inputs/inputMoney';
import { ButtonModal } from 'widgets/modals/ui/button/ButtonModal';
import { ButtonCloseModal } from 'widgets/modals/ui/button/ButtonCloseModal';



const SpendingModal = (props: ISpendingModal) => {
    const { onChangeActive, isActive } = props;
    const [isActiveSelect, setIsActiveSelect] = React.useState<boolean>(false);
    const [valueSelect, setValueSelect] = React.useState<string>('');
    const selected = valueSelect ? valueSelect : 'Выберити категию';
    const styleModal = isActive ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';
    const { categories } = CategoriesStore;
    const {
        register,
        setValue,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<IFormSpending>({ mode: 'onBlur' });


    function addNewSpending(data: IFormSpending) {
        const { categorie, spentMoney } = data;
        const newSpending = {
            categorie  : categorie ,
            spentMoney : +spentMoney,
        };

        setNewSpending(spentMoney, newSpending);
        cleanInputs();
        onChangeActive();
    }

    function setNewSpending(spentMoney: string, spending: ICategorie) {
        CashFlowStore.setSpending(+spentMoney);
        CategoriesStore.setNewSpandingInCategorie(spending);
    }

    function cleanInputs() {
        setValueSelect('');
        reset();
    }

    function getValueSelecet(categorie:string):void {
        setValue('categorie', categorie);
        setValueSelect(categorie);
    } ;


    function toggleActiveSelect():void {
        setIsActiveSelect(prev => !prev);
    }



    return (
        <>
            <div className={styleModal} onClick={onChangeActive}>
                <form
                    className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
                    onSubmit={handleSubmit(addNewSpending)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end">
                        <ButtonCloseModal onChangeActive={onChangeActive} />
                    </div>
                    <h2 className="text-xl font-bold text-center">Добавить трату</h2>
                    <label htmlFor="categorie">
                        <span className="flex justify-between">
                            <h2>Категория трат</h2>
                        </span>
                        <Select
                            isActiveSelect={isActiveSelect}
                            categories={categories}
                            getValueSelect={getValueSelecet}
                            selected={selected}
                            toggleActiveSelect={toggleActiveSelect}
                            register={register}
                            labelTitle="categorie"
                        />
                    </label>
                    <label htmlFor="spentMoney">
                        <span className="flex justify-between">
                            <h2>Сумма</h2> {errors?.spentMoney && <h2 className="text-red-700">{errors?.spentMoney?.message || 'Errors'}</h2>}
                        </span>
                        <InputMoney labelTitle="spentMoney" register={register} />
                    </label>
                    <ButtonModal title="Добавить" isValid={isValid} />
                </form>
            </div>
        </>
    );
};

export default SpendingModal;
