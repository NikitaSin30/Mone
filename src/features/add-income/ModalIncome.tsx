import React from 'react';
import { useForm } from 'react-hook-form';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { IModalIncome , IFormCategorie } from 'features/auth/interfaces/interfaces';
import { IOperation } from 'shared/store/interfaces/interfaces';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';


function ModalIncome(props: IModalIncome): React.ReactElement {
    const { onChangeActive } = props;

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormCategorie>({ mode: 'onBlur' });

    function setNewIncome(data: IFormCategorie) {
        const { income, sphere } = data;

        const operation: IOperation = {
            income : +income,
            sphere : sphere,
            date   : new Date(),
        };

        CashFlowStore.setIncome(operation.income);
        reset();
        onChangeActive();
    }


    return (
        <>
            <form
                className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
                onSubmit={handleSubmit(setNewIncome)}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end">
                    <button onClick={onChangeActive} className="rounded-full w-6 h-6 overflow-hidden hover:scale-110">
                        <CloseIcon/>
                    </button>
                </div>
                <h2 className="text-xl font-bold text-center">Введите доход</h2>
                <label htmlFor="sphere">
                    <span className="flex justify-between">
                        <h2>Сфера дохода</h2>
                        {errors?.sphere && <h2 className="text-red-700">{errors?.sphere?.message || 'Errors'}</h2>}
                    </span>
                    <input
                        type="text"
                        {...register('sphere', {
                            minLength : {
                                value   : 2,
                                message : 'Минимум 2 символа',
                            },
                            pattern : {
                                value   : /[А-Яа-я]{3}/,
                                message : 'Используйте кириллицу',
                            },
                        })}
                        className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                    />
                </label>
                <label htmlFor="income">
                    <span className="flex justify-between">
                        <h2>Cуммa дохода</h2> {errors?.income && <h2 className="text-red-700">{errors?.income?.message || 'Errors'}</h2>}
                    </span>
                    <input
                        className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                        type="text"
                        {...register('income', {
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
                <button className="text-center hover:scale-110" type="submit">
          Добавить
                </button>
            </form>
        </>
    );
}

export default ModalIncome;
