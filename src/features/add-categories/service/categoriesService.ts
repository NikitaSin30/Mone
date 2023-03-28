import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { ICategoriesService } from './interfaces/interfaces';
import { categorieApi } from 'api/CategoriesApi';
import { userStore } from 'shared/store/userStore/UserStore';



class CategoriesService implements ICategoriesService {

   async addCategorie(categorie: string, showModalError: () => void, switchShowModal:() => void) {
        const categorieValidated = this.validateCategorie(categorie);
        const hasCategorie = this.checkStoreHasCategorie(categorieValidated);
        if (hasCategorie) return showModalError();

        try {
        const res = await categorieApi.addCategorie(categorie,userStore.userId)
        const newCategorie = this.createCategorie(categorieValidated, res!);
        categoriesStore.addCatigorie(newCategorie);
        } catch (error) {
          return new Error()
        } finally {
         switchShowModal();
        }
    }


    async deleteCategorie(id:string) {
         try {
            const categorieObj = await categoriesStore.getCategorie(id)
            await categorieApi.deleteCategorie(categorieObj.key, userStore.userId);
            categoriesStore.removeCategorie(id)
         } catch (error) {
           return new Error()
         }

    }


     checkStoreHasCategorie(validatedCategorie: string) {
        return categoriesStore.categories.some(({ categorie }) => categorie === validatedCategorie);
    }

     validateCategorie(categorie: string) {
        const categorieValidated = categorie.trim().toLowerCase();
        const newCategorie = categorieValidated[0].toUpperCase() + categorieValidated.slice(1);

        return newCategorie;
    }

     createCategorie(uniqueCategorie: string,key:string) {
        return {
            categorie  : uniqueCategorie,
            spentMoney : 0,
            id         : uniqueCategorie,
            key: key
        };
    }
}


export const categoriesService = new CategoriesService();
