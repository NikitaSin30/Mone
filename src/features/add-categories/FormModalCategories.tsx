import { useForm } from 'react-hook-form';
import { IFormCategorie } from './interfaces/interfaces';
import { Button } from 'widgets/modals/ui/button/Button';
import { Input } from 'widgets/inputs/Input';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IModal } from 'widgets/modals/interfaces/interfaces';
import { categoriesService } from './service/categoriesService';



const FormModalCategories = (props: IModal) => {
    const { switchShowModal, switchShowModalErr, isModalActive } = props;
    const styleModal = isModalActive ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormCategorie>({ mode: 'onBlur' });


    function onAddCategorie({ categorie }: IFormCategorie): void {
        categoriesService.addCategorie(categorie, showModalError, switchShowModal);
        reset();
    }

    function showModalError(): void {
        switchShowModal();
        switchShowModalErr!();
    }

    return (
        <>
            <div className={styleModal} onClick={switchShowModal}>
                <form
                    className="flex flex-1 w-100 gap-1 flex-col  bg-slate-900  text-white"
                    onSubmit={handleSubmit(onAddCategorie)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div onClick={switchShowModal} className="rounded-full  w-6 h-6 self-end  hover:scale-110">
                        {CloseIcon}
                    </div>
                    <span className="text-xl font-bold text-center">Новая категория</span>
                    <Input caseType="textRus" register={register} titleRegister="categorie" errMessage={errors.categorie?.message} titleLabel='Введите категорию'/>
                    <Button isValid={isValid} title="Создать" />
                </form>
            </div>
        </>
    );
};

export default FormModalCategories;
