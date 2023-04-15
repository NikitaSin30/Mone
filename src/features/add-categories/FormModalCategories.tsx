import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormCategorie } from './interfaces';
import { Button } from 'widgets/modals/ui/button/Button';
import { Input } from 'widgets/inputs/Input';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { useService } from 'shared/hooks/useService/useService';
import { IContextAnalysis } from 'pages/analysis/context/interfaces';
import { ContextAnalysis } from 'pages/analysis/context/context';
import { CASE_USESERVICE_CATEGORIE } from 'shared/hooks/useService/constans';
import { CASE_TYPE_TEXT_RUS } from 'widgets/inputs/validation/constans';
import { TITLE_REGISTOR_CATEGORIE } from 'widgets/inputs/validation/constans';
import { TITLE_LABEL_CATEGORIE } from 'widgets/inputs/label/constans';
import { ACTIVE_MODAL_STYLE, HIDEN_MODAL_STYLE } from 'widgets/modals/constans';
import { TITLE_BUTTON_CATEGORIE } from 'widgets/modals/ui/button/constans';


const FormModalCategories = () => {
    const { isModalActiveAnalysis,
        switchIsModalActiveAnalysis,
        switchIsModalErrActiveAnalysis } = React.useContext<IContextAnalysis>(ContextAnalysis);
    const styleModal = isModalActiveAnalysis ? ACTIVE_MODAL_STYLE : HIDEN_MODAL_STYLE;

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormCategorie>({ mode: 'onBlur' });

    const onAddCategorie = useService(reset, CASE_USESERVICE_CATEGORIE, switchIsModalActiveAnalysis, switchIsModalErrActiveAnalysis);


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
                    <Input
                        caseType={CASE_TYPE_TEXT_RUS}
                        register={register}
                        titleRegister={TITLE_REGISTOR_CATEGORIE}
                        errMessage={errors.categorie?.message}
                        titleLabel={TITLE_LABEL_CATEGORIE}
                    />
                    <Button isValid={isValid} title={TITLE_BUTTON_CATEGORIE} />
                </form>
            </div>
        </>
    );
};

export default FormModalCategories;
