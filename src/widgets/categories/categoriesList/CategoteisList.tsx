import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { CategorieItem } from '../categorieItem/CategorieItem';
import { observer } from 'mobx-react-lite';



export const CatagoriesList = observer(() => {
    const { categories } = categoriesStore;

    return (
        <ul className="flex flex-wrap flex-col gap-2 w-full pt-2 ">
            {categories?.map(({ categorie, spending }) => {
                return <CategorieItem key={categorie} categorie={categorie} id={categorie} spending={spending} />;
            })}
        </ul>
    );
});
