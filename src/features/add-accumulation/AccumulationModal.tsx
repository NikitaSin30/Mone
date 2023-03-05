import React from 'react';
import { useForm } from 'react-hook-form';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { IModalAccumulation,IFormAccumulation } from './interfaces/interfaces';
import { InputMoney } from 'widgets/inputs/inputMoney';
import { ButtonModal } from 'widgets/modals/ui/button/ButtonModal';
import { ButtonCloseModal } from 'widgets/modals/ui/button/ButtonCloseModal';



function AccumulationModal(props: IModalAccumulation): React.ReactElement {
    const { onChangeActive, onChangeErr,isActive } = props;
    const styleModal = isActive ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormAccumulation>({ mode: 'onBlur' });

    function setNewIncome(data: IFormAccumulation) {
        const { accumulation } = data;

        checkHasMoneyForAccumulation(+accumulation);
    }

    function checkHasMoneyForAccumulation(sum : number) {
        if (CashFlowStore.moneyAccount < sum) return showError();

        addAccumulation(sum);
    }

    function showError() {
        onChangeActive();
        onChangeErr();
        reset();
    }

    function addAccumulation(sum:number) {
        CashFlowStore.setAccumulation(sum);
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
                        <ButtonCloseModal onChangeActive={onChangeActive} />
                    </div>
                    <h2 className="text-xl font-bold text-center">Сколько хотите отложить ?</h2>
                    <label htmlFor="accumulation">
                        <span className="flex justify-between">
                            <h2>Cуммa </h2> {errors?.accumulation && <h2 className="text-red-700">{errors?.accumulation?.message || 'Errors'}</h2>}
                        </span>
                        <InputMoney labelTitle="accumulation" register={register} />
                    </label>
                    <ButtonModal isValid={isValid} title="Добаавить " />
                </form>
            </div>
        </>
    );
}

export default AccumulationModal;
