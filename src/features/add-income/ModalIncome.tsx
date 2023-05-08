import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IFormIncome } from './interfaces';
import { IContextMain } from 'pages/main/context/interfaces';
import { ContextMain } from 'pages/main/context/context';
import { CASE_TYPE_NUMBER, CASE_TYPE_TEXT_RUS } from 'widgets/inputs/validation/constans';
import { TITLE_REGISTOR_INCOME, TITLE_REGISTOR_SPHERE } from 'widgets/inputs/validation/constans';
import { TITLE_LABEL_SPHERE } from 'widgets/inputs/label/constans';
import { ACTIVE_MODAL_STYLE, HIDEN_MODAL_STYLE } from 'widgets/modals/constans';
import { TITLE_BUTTON_ADD } from 'widgets/modals/ui/button/constans';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { SubtitleResponse } from 'widgets/errorResponse/SubtitleResponse';
import { showErrorFromDB } from 'shared/service/helpers/showErrorFromDB';
import { ioContainer } from 'api/IoC/ioc';


const ModalIncome = () => {
    const { isModalActiveIncome,switchIsModalActiveIncome } = React.useContext<IContextMain>(ContextMain);
    const { value: isError, toggle:setIsError } = useToggle(false);
    const [errorMessageFromDB, setErrorMessageFromDB] = React.useState('');

    const styleModal = isModalActiveIncome ? ACTIVE_MODAL_STYLE : HIDEN_MODAL_STYLE;
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormIncome>({ mode: 'onBlur' });


    const onAddIncome = async(dataForm:IFormIncome) =>{
        try {
            await ioContainer.incomeService.addIncome(dataForm);
            switchIsModalActiveIncome();
        }
        catch (error) {
            if (error instanceof Error) {
                showErrorFromDB(error.message,setIsError,setErrorMessageFromDB);
            }
        }
        finally {
            reset();
        }
    };


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
                    <SubtitleResponse isStatusResponse={isError} messageFromDB={errorMessageFromDB}/>
                    <span className="text-xl font-bold text-center">Введите доход</span>
                    <Input
                        caseType={CASE_TYPE_TEXT_RUS}
                        register={register}
                        titleRegister={TITLE_REGISTOR_SPHERE}
                        titleLabel={TITLE_LABEL_SPHERE}
                        errMessage={errors.sphere?.message}
                    />
                    <Input
                        caseType={CASE_TYPE_NUMBER}
                        titleRegister={TITLE_REGISTOR_INCOME}
                        register={register}
                        errMessage={errors.income?.message} />
                    <Button isValid={isValid} title={TITLE_BUTTON_ADD} />
                </form>
            </div>
        </>
    );
};

export default ModalIncome;
