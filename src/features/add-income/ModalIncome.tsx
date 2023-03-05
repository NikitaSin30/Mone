import React from 'react';
import { useForm } from 'react-hook-form';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { IOperation } from 'shared/store/interfaces/interfaces';
import { InputMoney } from 'widgets/inputs/inputMoney';
import { ButtonModal } from 'widgets/modals/ui/button/ButtonModal';
import { InputText } from 'widgets/inputs/InputText';
import { ButtonCloseModal } from 'widgets/modals/ui/button/ButtonCloseModal';
import { IModalIncome, IFormCategorie } from './interfaces/interfaces';



const ModalIncome = (props: IModalIncome) => {
    const { onChangeActive,isActive } = props;
    const styleModal = isActive ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors,isValid },
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
            <div className={styleModal} onClick={onChangeActive}>

                <form
                    className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
                    onSubmit={handleSubmit(setNewIncome)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end">
                        <ButtonCloseModal onChangeActive={onChangeActive}/>
                    </div>
                    <h2 className="text-xl font-bold text-center">Введите доход</h2>
                    <label htmlFor="sphere">
                        <span className="flex justify-between">
                            <h2>Сфера дохода</h2>
                            {errors?.sphere && <h2 className="text-red-700">{errors?.sphere?.message || 'Errors'}</h2>}
                        </span>
                        <InputText register={register} labelTitle="sphere" />
                    </label>
                    <label htmlFor="income">
                        <span className="flex justify-between">
                            <h2>Cуммa дохода</h2> {errors?.income && <h2 className="text-red-700">{errors?.income?.message || 'Errors'}</h2>}
                        </span>
                        <InputMoney labelTitle="income" register={register} />
                    </label>
                    <ButtonModal isValid={isValid} title="Добавить" />
                </form>
            </div>
        </>
    );
};

export default ModalIncome;
