import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IFormIncome } from './interfaces/interfaces';
import { useService } from 'shared/hooks/useService/useService';
import { IContextMain } from 'pages/main/context/interfaces/interfaces';
import { ContextMain } from 'pages/main/context/context';
import { INCOME } from 'shared/hooks/useService/constans/constans';
import { NUMBER,TEXT_RUS } from 'widgets/inputs/validation/constans/constans';



const ModalIncome = () => {
    const { isModalActiveIncome,switchIsModalActiveIncome } = React.useContext<IContextMain>(ContextMain);
    const styleModal = isModalActiveIncome ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormIncome>({ mode: 'onBlur' });

    const onAddIncome = useService(reset,INCOME,switchIsModalActiveIncome);


    return (
        <>
            <div className={styleModal} onClick={switchIsModalActiveIncome}>
                <form
                    className="flex flex-1 w-100 bg-slate-900 gap-1 flex-col  bg text-white"
                    onSubmit={handleSubmit(onAddIncome)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div onClick={switchIsModalActiveIncome} className="rounded-full w-6 h-6 self-end overflow-hidden hover:scale-110">
                        {CloseIcon}
                    </div>
                    <span className="text-xl font-bold text-center">Введите доход</span>
                    <Input caseType={TEXT_RUS} register={register} titleRegister="sphere" titleLabel='Сфера дохода' errMessage={errors.sphere?.message} />
                    <Input caseType={NUMBER} titleRegister={INCOME} register={register} errMessage={errors.income?.message}/>
                    <Button isValid={isValid} title="Добавить" />
                </form>
            </div>
        </>
    );
};

export default ModalIncome;
