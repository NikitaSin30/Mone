import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormAccumulation } from './interfaces/interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { useService } from 'shared/hooks/useService/useService';
import { IContextMain } from 'pages/main/context/interfaces/interfaces';
import { ContextMain } from 'pages/main/context/context';
import { ACCUMULATION } from 'shared/hooks/useService/constans/constans';
import { NUMBER } from 'widgets/inputs/validation/constans/constans';

const AccumulationModal = (): React.ReactElement => {
    const { isModalActiveAccumulation,switchisModalActiveAccumulation,switchisModalErrActiveAccumulation } = React.useContext<IContextMain>(ContextMain);
    const styleModal = isModalActiveAccumulation
        ? 'w-full  h-full  bg-opacity-20 bg-black fixed top-0 left-0 flex items-center justify-center '
        : 'hidden';

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormAccumulation>({ mode: 'onBlur' });

    const onAddAccumulation = useService(reset,ACCUMULATION,switchisModalActiveAccumulation,switchisModalErrActiveAccumulation);


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
                    <Input caseType={NUMBER} titleRegister={ACCUMULATION} register={register} errMessage={errors.accumulation?.message}/>
                    <Button isValid={isValid} title="Добаавить " />
                </form>
            </div>
        </>
    );
};

export default AccumulationModal;
