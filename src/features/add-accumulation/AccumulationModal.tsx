import React from 'react';
import { useForm } from 'react-hook-form';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { IMadalAccumulation,IFormAccumulation } from './interfaces/interfaces';



function AccumulationModal(props: IMadalAccumulation): React.ReactElement {
    const { onChangeActive, onChangeErr } = props;
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormAccumulation>({ mode: 'onBlur' });

    function setNewIncome(data: IFormAccumulation) {
        const { accumulation } = data;

        onCheckHasMoneyForAccumulation(+accumulation);
    }

    function onCheckHasMoneyForAccumulation(sum : number) {
        if (CashFlowStore.moneyAccount < sum) {
            onChangeErr();
            reset();
        }
        else {
            CashFlowStore.setAccumulation(sum);
            reset();
            onChangeActive();
        }
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <h2 className="text-xl font-bold text-center">Сколько хотите отложить ?</h2>
                <label htmlFor="accumulation">
                    <p className="flex justify-between">
                        <h2>Cуммa </h2> {errors?.accumulation && <h2 className="text-red-700">{errors?.accumulation?.message || 'Errors'}</h2>}
                    </p>
                    <input
                        className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                        type="text"
                        {...register('accumulation', {
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

export default AccumulationModal;
