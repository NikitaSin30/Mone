import { categoriesApi } from 'api/CategoriesApi';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { ICategoriesService } from './interfaces/interfaces';


class CategoriesService implements ICategoriesService {

    async addCategorie(categorie: string, switchShowModalErr: () => void, switchShowModal:() => void) {

        try {
           const categorieValidated = this.validateCategorie(categorie);
           const newCategorie = this.createCategorie(categorieValidated);

           await categoriesApi.addCategorie(newCategorie,userStore.user._id)
           categoriesStore.addCatigorie(newCategorie);

        } catch (error) {
            console.log('Ошибка');
            switchShowModalErr()
        } finally {
        switchShowModal();
        }
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
