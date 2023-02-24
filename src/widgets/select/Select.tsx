import { ICategorie } from 'shared/store/interfaces/interfaces';


interface ISelect {
  isActiveSelect: boolean;
  getValueInput: (categorie: string) => void;
  categories: Array<ICategorie>;
}
export const Select = (props:ISelect) => {
    const { isActiveSelect, getValueInput, categories } = props;
    const style = isActiveSelect ? 'block' : 'hidden';

    return (
        <>
            <ul className={`flex-1 w-full max-h-20 overflow-y-auto relative bg-slate-900 ${style}`}>
                {categories?.map(({ categorie }) => {
                    return (
                        <li
                            className="bg-white cursor-pointer  h-8
                         text-black font-semibold rounded-md shadow-lg px-2 py-1 border-solid border-b-2 hover:bg-slate-500 hover:text-white"
                            onClick={() => getValueInput(categorie)}
                        >
                            {categorie}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
