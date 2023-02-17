import { SyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IFormCategorie } from './interfaces/interfaces';
import { IModal } from 'widgets/modals/interfaces/interfaces';
import { serviceIncome } from './service/serviceIncome';


const ModalIncome = (props: IModal) => {
    const { switchShowModal, isModalActive } = props;
    const styleModal = isModalActive ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormCategorie>({ mode: 'onBlur' });

    async function onAddIncome({ income, sphere }: IFormCategorie) {
        try {
            await serviceIncome.midilwareAddIncome(income,sphere);
        }
        catch (error) {
            console.log('Ошибка');
        }
        finally {
            reset();
            switchShowModal();
        }


    }

    function onСloseModal(e: SyntheticEvent) {
        e.stopPropagation();
        switchShowModal();
    }

    return (
        <>
            <div className={styleModal} onClick={switchShowModal}>
                <div className="flex flex-1 w-full gap-1 flex-col  bg text-white bg-slate-900  rounded-md shadow-lg md:w-1/2 p-1">
                    <button onClick={(e) => onСloseModal(e)} className="rounded-full w-6 h-6 self-end overflow-hidden hover:scale-110">
                        {CloseIcon}
                    </button>
                    <form className="flex flex-1 w-100 gap-1 flex-col  bg text-white" onSubmit={handleSubmit(onAddIncome)} onClick={(e) => e.stopPropagation()}>
                        <span className="text-xl font-bold text-center">Введите доход</span>
                        <div className="flex justify-between">
                            <span>Сфера дохода</span>
                            {errors?.sphere && <span className="text-red-700">{errors?.sphere?.message || 'Errors'}</span>}
                        </div>
                        <Input caseType="textRus" register={register} labelTitle="sphere" />
                        <div className="flex justify-between">
                            <span>Cуммa дохода</span> {errors?.income && <span className="text-red-700">{errors?.income?.message || 'Errors'}</span>}
                        </div>
                        <Input caseType="number" labelTitle="income" register={register} />
                        <Button isValid={isValid} title="Добавить" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ModalIncome;
