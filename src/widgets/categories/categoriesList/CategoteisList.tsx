import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { CategorieItem } from '../categorieItem/CategorieItem';
import { observer } from 'mobx-react-lite';



export const CatagoriesList = observer(() => {

    const { categories } = categoriesStore;

    return (
        <ul className="flex flex-wrap flex-col gap-2 w-full pt-2 ">
            {categories?.map(({ categorie, spending,id }) => {
                return <CategorieItem key={id} categorie={categorie} id={id} spending={spending} />;
            })}
        </ul>
    );
});
