import { observer } from 'mobx-react-lite';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { ISelectList } from './interfaces';

export const SelectList = observer(({ getValueSelect,style }: ISelectList) => {
    const { categories } = categoriesStore;


    return (

        <ul className={`flex-1 w-full max-h-20 overflow-y-auto relative bg-slate-900 ${style}`}>
            {categories?.map(({ categorie }) => {
                return (
                    <li
                        key={categorie}
                        className="bg-white cursor-pointer  h-8
                         text-black font-semibold rounded-md shadow-lg px-2 py-1 border-solid border-b-2 hover:bg-slate-500 hover:text-white"
                        onClick={() => getValueSelect(categorie)}
                    >
                        {categorie}
                    </li>
                );
            })}
        </ul>
    );
});
