import React, { SyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import { IFormAccumulation } from './interfaces/interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IModal } from 'widgets/modals/interfaces/interfaces';
import { serviceAccumulation } from './service/serviceAccumulation';



const AccumulationModal = (props: IModal): React.ReactElement => {
    const { switchShowModal, switchShowModalErr, isModalActive } = props;
    const styleModal = isModalActive ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormAccumulation>({ mode: 'onBlur' });

    async function onAddAccumulation({ accumulation }: IFormAccumulation) {
        try {
            await serviceAccumulation.midlewareAddAccumulation(accumulation, showModalError, switchShowModal);
        }
        catch (error) {
            console.log('Ошибка');
        }
        finally {
            reset();
        }

    }

    function showModalError() {
        switchShowModal();
        switchShowModalErr!();
    }

    function onСloseModal(e: SyntheticEvent) {
        e.stopPropagation();
        switchShowModal();
    }

    return (
        <>
            <div className={styleModal} onClick={switchShowModal}>
                <div className="flex flex-1 w-full gap-1 flex-col  bg text-white bg-slate-900  rounded-md shadow-lg md:w-1/2 p-1 ">
                    <button onClick={(e) => onСloseModal(e)} className="rounded-full w-6 h-6 self-end overflow-hidden hover:scale-110">
                        {CloseIcon}
                    </button>
                    <form
                        className="flex flex-1 w-100 gap-1 flex-col  bg text-white py-6 px-8  "
                        onSubmit={handleSubmit(onAddAccumulation)}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="text-xl font-bold text-center">Сколько хотите отложить ?</span>
                        <div className="flex justify-between">
                            <span>Cуммa </span> {errors?.accumulation && <span className="text-red-700">{errors?.accumulation?.message || 'Errors'}</span>}
                        </div>
                        <Input caseType="number" labelTitle="accumulation" register={register} />
                        <Button isValid={isValid} title="Добаавить " />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AccumulationModal;
