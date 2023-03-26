import React from 'react';
import { useForm } from 'react-hook-form';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from 'features/add-spending/interfaces/interfaces';
import { Select } from 'widgets/select/Select';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';
import { IModal } from 'widgets/modals/interfaces/interfaces';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { spendingService } from './service/serviceSpending';



const SpendingModal = (props: IModal) => {
    const { switchShowModal, isModalActive } = props;
    const { value: isActiveSelect, toggle: toggleActiveSelect } = useToggle(false);
    const [valueSelect, setValueSelect] = React.useState<string>('');
    const selected = valueSelect ? valueSelect : 'Выберити категию';
    const styleModal = isModalActive ? 'w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center ' : 'hidden';
    const { categories } = categoriesStore;

    const {
        register,
        setValue,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<IFormSpending>({ mode: 'onBlur' });


    async function onAddSpending( newSpending : IFormSpending) {

        try {
            await spendingService.addSpending(newSpending);
        }
        catch (error) {
            console.log('Ошибка');
        }
        finally {
            setValueSelect('');
            reset();
            switchShowModal();
        }
    }

    function getValueSelect(categorie:string):void {
        setValue('categorie', categorie);
        setValueSelect(categorie);
    } ;


    return (
        <>
            <div className={styleModal} onClick={switchShowModal}>
                <form
                    className="flex flex-1 w-100 gap-1 flex-col  bg-slate-900 text-white py-6 px-8  "
                    onSubmit={handleSubmit(onAddSpending)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div onClick={switchShowModal} className="rounded-full  w-6 h-6 self-end  hover:scale-110">
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
                    <Input caseType="number" titleRegister="spentMoney" register={register} errMessage={errors.spentMoney?.message} />
                    <Button title="Добавить" isValid={isValid} />
                </form>
            </div>
        </>
    );
};

export default SpendingModal;
