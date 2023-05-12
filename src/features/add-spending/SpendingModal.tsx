import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormSpending } from 'features/add-spending/interfaces';
import { Select } from 'widgets/select/Select';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { IContextMain } from 'pages/main/context/interfaces';
import { ContextMain } from 'pages/main/context/context';
import { CASE_TYPE_NUMBER, CASE_TYPE_SELECT } from 'widgets/inputs/validation/constans';
import { TITLE_REGISTOR_SPENDING, TITLE_REGISTOR_CATEGORIE } from 'widgets/inputs/validation/constans';
import { TITLE_LABEL_SELECT } from 'widgets/inputs/label/constans';
import { ACTIVE_MODAL_STYLE, HIDEN_MODAL_STYLE } from 'widgets/modals/constans';
import { TITLE_BUTTON_ADD } from 'widgets/modals/ui/button/constans';
import { SubtitleResponse } from 'widgets/subtitleResponse/SubtitleResponse';
import { ioContainer } from 'api/IoC/ioc';


const SpendingModal = () => {
    const { isModalActiveSpending,switchIsModalActiveSpending } = React.useContext<IContextMain>(ContextMain);
    const { value: isActiveSelect, toggle: toggleActiveSelect } = useToggle(false);
    const { value: isError, toggle:setIsError } = useToggle(false);
    const [errorMessageFromDB, setErrorMessageFromDB] = React.useState('');
    const [valueSelect, setValueSelect] = React.useState<string>('');
    const selected = valueSelect ? valueSelect : TITLE_LABEL_SELECT;
    const styleModal = isModalActiveSpending ? ACTIVE_MODAL_STYLE : HIDEN_MODAL_STYLE;


    const {
        register,
        setValue,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<IFormSpending>({ mode: 'onBlur' });


    const onAddSpending = async(dataForm:IFormSpending) => {
        try {
            await ioContainer.spendingService.addSpending(dataForm);
            switchIsModalActiveSpending();
        }
        catch (error) {
            if (error instanceof Error) {
                setErrorMessageFromDB(error.message);
                setIsError();

                setTimeout(()=>{
                    setErrorMessageFromDB('');
                    setIsError();
                },3000);
            }
        }
        finally {
            reset();
            setValueSelect('');
        }
    };

    function getValueSelect(categorie:string):void {
        setValue('categorie', categorie);
        setValueSelect(categorie);
    } ;


    return (
        <>
            <div className={styleModal} onClick={switchIsModalActiveSpending}>
                <form
                    className="flex flex-1 w-100 gap-1 flex-col  bg-slate-900 text-white py-6 px-8  "
                    onSubmit={handleSubmit(onAddSpending)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div onClick={switchIsModalActiveSpending} className="rounded-full  w-6 h-6 self-end  hover:scale-110">
                        {CloseIcon}
                    </div>
                    <SubtitleResponse messageFromDB={errorMessageFromDB} isErrorVisible={isError}/>
                    <span className="text-xl font-bold text-center">Добавить трату</span>
                    <div className="flex justify-between">
                        <span>Категория трат</span>
                    </div>
                    <Select
                        isActiveSelect={isActiveSelect}
                        getValueSelect={getValueSelect}
                        selected={selected}
                        toggleActiveSelect={toggleActiveSelect}
                        register={register}
                        titleRegister={TITLE_REGISTOR_CATEGORIE}
                        caseType={CASE_TYPE_SELECT}
                    />
                    <Input
                        caseType={CASE_TYPE_NUMBER}
                        titleRegister={TITLE_REGISTOR_SPENDING}
                        register={register}
                        errMessage={errors.spending?.message}
                    />
                    <Button title={TITLE_BUTTON_ADD} isValid={isValid} />
                </form>
            </div>
        </>
    );
};

export default SpendingModal;
