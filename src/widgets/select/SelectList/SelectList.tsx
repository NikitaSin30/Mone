import { observer } from 'mobx-react-lite';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { ISelectList } from './interfaces';
const a = ['e','w','t','ty','yt','tr'];

export const SelectList = observer(({ getValueSelect,style }: ISelectList) => {
    const { categories } = categoriesStore;


    return (

        <ul className={`flex-1 absolute left-0  w-full max-h-20 overflow-y-auto  bg-slate-900 ${style}`}>
            {a?.map((i) => {
                return (
                    <li
                        key={i}
                        className="bg-white cursor-pointer  h-7
                         text-black font-semibold my-1 rounded-md shadow-lg px-2 transition-all   hover:bg-slate-500 hover:bor border-amber-600

                         hover:border-solid hover:border-2
                          hover:text-white"
                        onClick={() => getValueSelect(i)}
                    >
                        {i}
                    </li>
                );
            })}
        </ul>
    );
});
