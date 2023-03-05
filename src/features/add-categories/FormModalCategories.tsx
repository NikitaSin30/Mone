import React from 'react';
import { useForm } from 'react-hook-form';
import { CategoriesStore } from 'shared/store/CategoriesStore';
import { IFormCategorie, IFormModalCategories } from './interfaces/interfaces';
import { ButtonModal } from 'widgets/modals/ui/button/ButtonModal';
import { InputText } from 'widgets/inputs/InputText';
import { ButtonCloseModal } from 'widgets/modals/ui/button/ButtonCloseModal';



const FormModalCategories = (props: IFormModalCategories) => {
    const { onChangeActive, onChangeErr, isActive } = props;
    const styleModal = isActive ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';
    const { categories } = CategoriesStore;
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors , isValid },
    } = useForm<IFormCategorie>({ mode: 'onBlur' });


    function setNewCategorie(data: IFormCategorie): void {
        const { categorie } = data;
        const validatedCategorie = categorie.trim().toLowerCase();
        const newCategorie = validatedCategorie[0].toUpperCase() + validatedCategorie.slice(1);

        checkUniqueNewCategorie(newCategorie);
    }

    function checkUniqueNewCategorie( categorie: string ): void | Function {
        const isHasCategorie = categories.some((i) => i.categorie === categorie);

        if (isHasCategorie) return showError();

        const newCategorie = {
            categorie  : categorie,
            spentMoney : 0,
            id         : categorie,
        };

        CategoriesStore.setCatigorie(newCategorie);
        onChangeActive();
        reset();
    }

    function showError() : void {
        onChangeActive();
        onChangeErr();
        reset();
    }

    return (
        <>
            <div className={styleModal} onClick={onChangeActive}>
                <form
                    className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
                    onSubmit={handleSubmit(setNewCategorie)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end">
                        <ButtonCloseModal onChangeActive={onChangeActive}/>
                    </div>
                    <h2 className="text-xl font-bold text-center">Новая категория</h2>
                    <label htmlFor="catogirie">
                        <span className="flex justify-between">
                            <h2>Введите категорию</h2> {errors?.categorie && <h2 className="text-red-700">{errors?.categorie?.message || 'Errors'}</h2>}
                        </span>
                        <InputText register={register} labelTitle="categorie" />
                    </label>
                    <ButtonModal isValid={isValid} title="Создать" />
                </form>
            </div>
        </>
    );
};

export default FormModalCategories;
