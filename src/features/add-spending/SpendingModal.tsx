import React from 'react';
import { useForm } from 'react-hook-form';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from 'features/add-spending/interfaces/interfaces';
import { Select } from 'widgets/select/Select';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { useService } from 'shared/hooks/useService/useService';
import { IContextMain } from 'pages/main/context/interfaces/interfaces';
import { ContextMain } from 'pages/main/context/context';
import { SPENDING } from 'shared/hooks/useService/constans/constans';
import { NUMBER } from 'widgets/inputs/validation/constans/constans';



const SpendingModal = () => {
    const {isModalActiveSpending,switchIsModalActiveSpending} = React.useContext<IContextMain>(ContextMain)
    const { value: isActiveSelect, toggle: toggleActiveSelect } = useToggle(false);
    const [valueSelect, setValueSelect] = React.useState<string>('');
    const selected = valueSelect ? valueSelect : 'Выберити категию';
    const styleModal = isModalActiveSpending ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';
    const { categories } = categoriesStore;

    const {
        register,
        setValue,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<IFormSpending>({ mode: 'onBlur' });

   const onAddSpending = useService(reset, SPENDING ,switchIsModalActiveSpending,undefined,setValueSelect)

    function getValueSelect(categorie:string):void {
        setValue('categorie', categorie);
        setValueSelect(categorie);
    } ;


    return (
        <>
            <div className={styleModal} onClick={switchIsModalActiveSpending}>
                <form
                    className="flex flex-1 w-100 gap-1 flex-col  bg-slate-900 text-white py-6 px-8  "
                    onSubmit={handleSubmit(onAddSpending)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div onClick={switchIsModalActiveSpending} className="rounded-full  w-6 h-6 self-end  hover:scale-110">
                        {CloseIcon}
                    </div>
                    <span className="text-xl font-bold text-center">Добавить трату</span>
                    <div className="flex justify-between">
                        <span>Категория трат</span>
                    </div>
                    <Select
                        isActiveSelect={isActiveSelect}
                        categories={categories}
                        getValueSelect={getValueSelect}
                        selected={selected}
                        toggleActiveSelect={toggleActiveSelect}
                        register={register}
                        labelTitle="categorie"
                    />
                    <Input caseType={NUMBER} titleRegister={SPENDING} register={register} errMessage={errors.spending?.message} />
                    <Button title="Добавить" isValid={isValid} />
                </form>
            </div>
        </>
    );
};

export default SpendingModal;
