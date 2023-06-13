import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormAccumulation } from './interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IContextMain } from 'pages/main/context/interfaces';
import { ContextMain } from 'pages/main/context/context';
import { CASE_TYPE_NUMBER } from 'widgets/inputs/validation/constans';
import { TITLE_REGISTOR_ACCUMULATION } from 'widgets/inputs/validation/constans';
import { ACTIVE_MODAL_STYLE,HIDEN_MODAL_STYLE } from 'widgets/modals/constans';
import { TITLE_BUTTON_ADD } from 'widgets/modals/ui/button/constans';
import { IAccumulationModal } from './interfaces';
import { ioContainer } from 'api/IoC/ioc';



const AccumulationModal = ({ setTextError } : IAccumulationModal ) => {
    const { isModalActiveAccumulation,switchisModalActiveAccumulation,switchisModalErrActiveAccumulation } = React.useContext<IContextMain>(ContextMain);
    const styleModal = isModalActiveAccumulation ? ACTIVE_MODAL_STYLE : HIDEN_MODAL_STYLE;

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormAccumulation>({ mode: 'onBlur' });


    const onAddAccumulation = async(formAccumulation : IFormAccumulation) => {
        try {
            await ioContainer.accumulationService.addAccumulation(formAccumulation);
            switchisModalActiveAccumulation();
        }
        catch (error) {
            if (error instanceof Error) {
                switchisModalActiveAccumulation();
                setTextError(error.message);
                switchisModalErrActiveAccumulation();
            }
            else {
                switchisModalActiveAccumulation();
                setTextError('Ошибка');
                switchisModalErrActiveAccumulation();
            }
        }
        finally {
            reset();
        }
    };

    return (
        <>
            <div className={styleModal} onClick={switchisModalActiveAccumulation}>
                <form
                    className="flex flex-1  w-100 gap-1 flex-col
                     bg-slate-900 text-white py-6 px-8  "
                    onSubmit={handleSubmit(onAddAccumulation)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div onClick={switchisModalActiveAccumulation} className="rounded-full  w-6 h-6 self-end  hover:scale-110">
                        {CloseIcon}
                    </div>
                    <span className="text-xl font-bold text-center">Сколько хотите отложить ?</span>
                    <Input
                        caseType={CASE_TYPE_NUMBER}
                        titleRegister={TITLE_REGISTOR_ACCUMULATION}
                        register={register}
                        errMessage={errors.accumulation?.message} />
                    <Button isValid={isValid} title={TITLE_BUTTON_ADD} />
                </form>
            </div>
        </>
    );
};

export default AccumulationModal;
