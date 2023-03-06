import React from 'react';
import { useForm } from 'react-hook-form';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { IOperation } from 'shared/store/interfaces/interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IFormCategorie } from './interfaces/interfaces';
import { IModal } from 'widgets/modals/interfaces/interfaces';



const ModalIncome = (props: IModal) => {
    const { switchShowModal,isModalActive } = props;
    const styleModal = isModalActive ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<IFormCategorie>({ mode: 'onBlur' });


    function setNewIncome({ income,sphere }: IFormCategorie) {

        const operation: IOperation = {
            income : income,
            sphere : sphere,
            date   : new Date(),
        };

        CashFlowStore.setIncome(operation.income);
        reset();
        switchShowModal();
    }



    return (
        <>
            <div className={styleModal} onClick={switchShowModal}>
                <form
                    className="flex flex-1 w-100 gap-1 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
                    onSubmit={handleSubmit(setNewIncome)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end">
                        <button onClick={switchShowModal} className="rounded-full w-6 h-6 overflow-hidden hover:scale-110">
                            {CloseIcon}
                        </button>
                    </div>
                    <span className="text-xl font-bold text-center">Введите доход</span>
                    <div className="flex justify-between">
                        <span>Сфера дохода</span>
                        {errors?.sphere && <span className="text-red-700">{errors?.sphere?.message || 'Errors'}</span>}
                    </div>
                    <Input type="text" register={register} labelTitle="sphere" />
                    <div className="flex justify-between">
                        <span>Cуммa дохода</span> {errors?.income && <span className="text-red-700">{errors?.income?.message || 'Errors'}</span>}
                    </div>
                    <Input type="number" labelTitle="income" register={register} />
                    <Button isValid={isValid} title="Добавить" />
                </form>
            </div>
        </>
    );
};

export default ModalIncome;
