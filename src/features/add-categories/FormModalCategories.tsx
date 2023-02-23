import React from 'react';
import { useForm } from 'react-hook-form';
import { CategoriesStore } from 'shared/store/CategoriesStore';
import { ICategorie, IFormModalCategories } from './interfaces/interfaces';
import { CloseIcon } from 'widgets/modals/assets/assets';


function FormModalCategories(props: IFormModalCategories): React.ReactElement {
    const { onChangeActive, onChangeErr } = props;
    const { setCatigorie, categories } = CategoriesStore;
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors , isValid },
    } = useForm<ICategorie>({ mode: 'onBlur' });

    function setNewCategorie(data: ICategorie): void {

        const { categorie } = data;
        const validatedCategorie = categorie.trim().toLowerCase();
        const newCategorie = validatedCategorie[0].toUpperCase() + validatedCategorie.slice(1);

        onCheckUniqueNewCategorie(newCategorie);
    }



    function onCheckUniqueNewCategorie( categorie: string ): void | Function {
        const isHasCategorie = categories.some((i) => i.categorie === categorie);

        if (isHasCategorie) return showError();
        const newCategorie = {
            categorie  : categorie,
            spentMoney : 0,
        };

        setCatigorie(newCategorie);

        onChangeActive();
        reset();

    }

    function showError() : void {
        onChangeErr();
        reset();
    }

    return (
        <>
            <form
                className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
                onSubmit={handleSubmit(setNewCategorie)}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end">
                    <button onClick={onChangeActive} className="rounded-full overflow-hidden hover:scale-110">
                        <CloseIcon/>
                    </button>
                </div>
                <h2 className="text-xl font-bold text-center">Новая категория</h2>
                <label htmlFor="catogirie">
                    <span className="flex justify-between">
                        <h2>Введите категорию</h2> {errors?.categorie && <h2 className="text-red-700">{errors?.categorie?.message || 'Errors'}</h2>}
                    </span>
                    <input
                        className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                        type="text"
                        {...register('categorie', {
                            minLength : {
                                value   : 3,
                                message : 'Минимум 3 символа',
                            },
                            pattern : {
                                value   : /[А-Яа-я]{3}/,
                                message : 'Используйте кириллицу',
                            },
                        })}
                    />
                </label>
                <button disabled={!isValid} className="text-center hover:scale-110" type="submit">
          Создать
                </button>
            </form>
        </>
    );
}

export default FormModalCategories;
