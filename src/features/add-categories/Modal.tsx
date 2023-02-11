import React from 'react';
import { useForm } from 'react-hook-form';
import { CategoriesStore } from 'shared/store/CategoriesStore';

type ModalCategorie = {
    categorie: string
}

type PropsModal = {
  active: boolean;
  onChangeActive: () => void;
};

function Modal(props:PropsModal):React.ReactElement {
    const { active, onChangeActive } = props;
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ModalCategorie>({ mode: 'onBlur' });

    function setNewCategorie(data:ModalCategorie):void {
        const { categorie } = data;
        const modifyCategorie = categorie.trim().toUpperCase();
        const result = modifyCategorie[0].toUpperCase() + modifyCategorie.slice(1).toLowerCase();

        const isHasCategorie = CategoriesStore.categories.some((i) => i === result);

        checkinUniqueNewCategorie(isHasCategorie,result);
    }

    function checkinUniqueNewCategorie(isHasCategorie: boolean,categorie:string) {
        if (isHasCategorie) {
            onChangeActive();
            reset();
        }
        else {
            CategoriesStore.setCatigorie(categorie);
            onChangeActive();
            reset();
        }
    }



    const styleModal = active ? 'w-full h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center' : 'hidden';


    return (
        <>
            <div className={styleModal} onClick={onChangeActive}>
                <form
                    className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
                    onSubmit={handleSubmit(setNewCategorie)}
                    
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end">
                        <button onClick={onChangeActive} className="rounded-full overflow-hidden hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <h2 className="text-xl font-bold text-center">Новая категория</h2>
                    <label htmlFor="catogirie">
                        <p className="flex justify-between">
                            <h2>Введите категорию</h2> {errors?.categorie && <h2 className="text-red-700">{errors?.categorie?.message || 'Errors'}</h2>}
                        </p>
                        <input
                            className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                            type="text"
                            {...register('categorie', {

                                //  required: "Обязательное Поле",
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
                    <button className="text-center hover:scale-110" type="submit">Создать</button>
                </form>
            </div>
        </>
    );
}


export default Modal;
