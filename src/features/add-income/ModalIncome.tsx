import { useForm } from 'react-hook-form';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IFormCategorie } from './interfaces/interfaces';
import { IModal } from 'widgets/modals/interfaces/interfaces';
import { incomeService } from './service/incomeService';



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
            await incomeService.addIncome(income, sphere);
        }
        catch (error) {
            console.log('Ошибка');
        }
        finally {
            reset();
            switchShowModal();
        }
    }


    return (
        <>
            <div className={styleModal} onClick={switchShowModal}>
                <form
                    className="flex flex-1 w-100 bg-slate-900 gap-1 flex-col  bg text-white"
                    onSubmit={handleSubmit(onAddIncome)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div onClick={switchShowModal} className="rounded-full w-6 h-6 self-end overflow-hidden hover:scale-110">
                        {CloseIcon}
                    </div>
                    <span className="text-xl font-bold text-center">Введите доход</span>
                    <Input caseType="textRus" register={register} titleRegister="sphere" titleLabel='Сфера дохода' errMessage={errors.sphere?.message} />
                    <Input caseType="number" titleRegister="income" register={register} errMessage={errors.income?.message}/>
                    <Button isValid={isValid} title="Добавить" />
                </form>
            </div>
        </>
    );
};

export default ModalIncome;
