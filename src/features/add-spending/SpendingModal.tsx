import React from 'react';
import { useForm } from 'react-hook-form';
import { CategoriesStore } from 'shared/store/CategoriesStore';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { ICategorie } from 'shared/store/interfaces/interfaces';
import { ISpendingModal, IFormSpending } from 'features/add-spending/interfaces/interfaces';
import { Select } from 'widgets/select/Select';
import { CloseIcon } from 'widgets/modals/assets/assets';


function SpendingModal(props: ISpendingModal): React.ReactElement {
    const [isActiveSelect, setIsActiveSelect] = React.useState<boolean>(false);
    const [valueInput, setValueInput] = React.useState<string>('');
    const selected = valueInput ? valueInput : 'Выберити категию';

    const { onChangeActive } = props;
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
        onCleanInputs();
        onChangeActive();
    }

    function setNewSpending(spentMoney: string, spending: ICategorie) {
        CashFlowStore.setSpending(+spentMoney);
        CategoriesStore.setNewSpandingInCategorie(spending);
    }

    function onCleanInputs() {
        setValueInput('');
        reset();
    }

    function getValueInput(categorie:string):void {
        setValue('categorie', categorie);
        setValueInput(categorie);
        console.log(valueInput);
    } ;



    function toggleActiveSelect():void {
        setIsActiveSelect(prev => !prev);
    }


    return (
        <>
            <form
                className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
                onSubmit={handleSubmit(addNewSpending)}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end">
                    <button onClick={onChangeActive} className="rounded-full w-6 h-6 overflow-hidden hover:scale-110">
                        <CloseIcon/>
                    </button>
                </div>
                <h2 className="text-xl font-bold text-center">Добавить трату</h2>
                <label htmlFor="categorie">
                    <span className="flex justify-between">
                        <h2>Категория трат</h2>
                    </span>
                    <div
                        onClick={toggleActiveSelect}
                        className="flex-1 cursor-pointer bg-white h-8
                         text-black font-semibold rounded-md shadow-lg py-1"
                    >
                        <div {...register('categorie', { required: true })}>{selected}</div>
                        <Select isActiveSelect={isActiveSelect} categories={categories} getValueInput={getValueInput}></Select>
                    </div>
                </label>
                <label htmlFor="spentMoney">
                    <span className="flex justify-between">
                        <h2>Сумма</h2> {errors?.spentMoney && <h2 className="text-red-700">{errors?.spentMoney?.message || 'Errors'}</h2>}
                    </span>
                    <input
                        className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                        type="text"
                        {...register('spentMoney', {
                            required  : 'Обязательное Поле',
                            minLength : {
                                value   : 3,
                                message : 'Минимум 3 символа',
                            },
                            pattern : {
                                value   : /^\s*[\d]+(?:,[\d]+)?\s*$/,
                                message : 'Используйте только цифры',
                            },
                        })}
                    />
                </label>
                <button disabled={!isValid} className="text-center hover:scale-110" type="submit">
            Добавить
                </button>
            </form>
        </>
    );
}

export default SpendingModal;
