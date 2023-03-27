import React from 'react'
import { useForm } from 'react-hook-form';
import { IFormCategorie } from './interfaces/interfaces';
import { Button } from 'widgets/modals/ui/button/Button';
import { Input } from 'widgets/inputs/Input';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { useService } from 'shared/hooks/useService/useService';
import { IContextAnalysis } from 'pages/analysis/context/interfaces/interfaces';
import { ContextAnalysis } from 'pages/analysis/context/context';
import { CATEGORIE } from 'shared/hooks/useService/constans/constans';
import { TEXT_RUS } from 'widgets/inputs/validation/constans/constans';



const FormModalCategories = () => {
    const {isModalActiveAnalysis,
        switchIsModalActiveAnalysis,
        switchIsModalErrActiveAnalysis} = React.useContext<IContextAnalysis>(ContextAnalysis)
    const styleModal = isModalActiveAnalysis ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormCategorie>({ mode: 'onBlur' });

    const onAddCategorie = useService(reset,CATEGORIE,switchIsModalActiveAnalysis,switchIsModalErrActiveAnalysis)


    return (
        <>
            <div className={styleModal} onClick={switchIsModalActiveAnalysis}>
                <form
                    className="flex flex-1 w-100 gap-1 flex-col  bg-slate-900  text-white"
                    onSubmit={handleSubmit(onAddCategorie)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div onClick={switchIsModalActiveAnalysis} className="rounded-full  w-6 h-6 self-end  hover:scale-110">
                        {CloseIcon}
                    </div>
                    <span className="text-xl font-bold text-center">Новая категория</span>
                    <Input caseType={TEXT_RUS} register={register} titleRegister={CATEGORIE} errMessage={errors.categorie?.message} titleLabel='Введите категорию'/>
                    <Button isValid={isValid} title="Создать" />
                </form>
            </div>
        </>
    );
};

export default FormModalCategories;
