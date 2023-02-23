import { CategoriesStore } from 'shared/store/CategoriesStore';




export const CatagoriesList = () => {
    const { categories } = CategoriesStore;

    
    return (
        <ul className="flex flex-wrap flex-col gap-2 w-full pt-2 ">
            {categories?.map(({ categorie , spentMoney }) => {
                return (
                    <li
                        className="flex-none max-h-[40px] flex px-4 py-2 text-white bg-slate-900  items-center
                          justify-between rounded-md shadow-lg"
                        key={categorie}
                    >
                        <h2 className="font-semibold text-md">{categorie}</h2>
                        <h2 className="font-semibold text-md">{spentMoney}</h2>

                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};
