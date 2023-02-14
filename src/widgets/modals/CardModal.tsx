import React from 'react';
import { useForm } from 'react-hook-form';
import { CashFlow } from 'shared/store/CashFlowStore';

interface IModalCategorie {
  income: string;
};

interface IPropsForm {
  onChangeActive: () => void;
  incomeSphere:string
};

interface IInfoOperation {
    income: number,
    date : Date
}

function CardModal(props: IPropsForm): React.ReactElement {
    const { onChangeActive , incomeSphere } = props;
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<IModalCategorie>({ mode: 'onBlur' });

    function setNewIncome(data:IModalCategorie) {
        const { income }  =  data;

        const infoOperation: IInfoOperation =  {
            income : +income,
            date   : new Date(),
        };

        CashFlow.setIncome(+income);
        CashFlow.setInfoOperation(infoOperation);
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <h2 className="text-xl font-bold text-center">{incomeSphere}</h2>
                <label htmlFor="income">
                    <p className="flex justify-between">
                        <h2>Введите сумму дохода</h2> {errors?.income && <h2 className="text-red-700">{errors?.income?.message || 'Errors'}</h2>}
                    </p>
                    <input
                        className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                        type="text"
                        {...register('income', {

                            //  required: "Обязательное Поле",
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

export default CardModal;
