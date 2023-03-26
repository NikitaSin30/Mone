import { useForm } from 'react-hook-form';
import { IFormAccumulation } from './interfaces/interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IModal } from 'widgets/modals/interfaces/interfaces';
import { accumulationService } from './service/AccumulationService';
import { Label } from 'widgets/inputs/label/Label';


const AccumulationModal = (props: IModal): React.ReactElement => {
    const { switchShowModal, switchShowModalErr, isModalActive } = props;
    const styleModal = isModalActive
        ? 'w-full  h-full  bg-opacity-20 bg-black fixed top-0 left-0 flex items-center justify-center '
        : 'hidden';

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormAccumulation>({ mode: 'onBlur' });

    async function onAddAccumulation({ accumulation }: IFormAccumulation) {

        try {
            await accumulationService.addAccumulation( accumulation, showModalError, switchShowModal);
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


    return (
        <>
            <div className={styleModal} onClick={switchShowModal}>
                <form
                    className="flex flex-1  w-100 gap-1 flex-col
                     bg-slate-900 text-white py-6 px-8  "
                    onSubmit={handleSubmit(onAddAccumulation)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div onClick={switchShowModal} className="rounded-full  w-6 h-6 self-end  hover:scale-110">
                        {CloseIcon}
                    </div>
                    <span className="text-xl font-bold text-center">Сколько хотите отложить ?</span>
                    <Label error={errors.accumulation}/>
                    <Input caseType="number" labelTitle="accumulation" register={register} />
                    <Button isValid={isValid} title="Добаавить " />
                </form>
            </div>
        </>
    );
};

export default AccumulationModal;
