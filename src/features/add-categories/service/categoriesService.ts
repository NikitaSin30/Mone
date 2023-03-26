import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { ICategoriesService } from './interfaces/interfaces';


class CategoriesService implements ICategoriesService {

    addCategorie(categorie: string, showModalError: () => void, switchShowModal:() => void) {
        const categorieValidated = this.validateCategorie(categorie);
        const hasCategorie = this.checkStoreHasCategorie(categorieValidated);

        if (hasCategorie) return showModalError();
        const newCategorie = this.createCategorie(categorieValidated);

        categoriesStore.addCatigorie(newCategorie);
        switchShowModal();
    }
     checkStoreHasCategorie(validatedCategorie: string) {
        return categoriesStore.categories.some(({ categorie }) => categorie === validatedCategorie);
    }

     validateCategorie(categorie: string) {
        const categorieValidated = categorie.trim().toLowerCase();
        const newCategorie = categorieValidated[0].toUpperCase() + categorieValidated.slice(1);

        return newCategorie;
    }

     createCategorie(uniqueCategorie: string) {
        return {
            categorie  : uniqueCategorie,
            spentMoney : 0,
            id         : uniqueCategorie,
        };


    }
}


export const categoriesService = new CategoriesService();
