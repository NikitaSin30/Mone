import { categoriesApi } from 'api/CategoriesApi';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { validateString } from 'shared/mappers/validateString';
import { IFormCategorie } from '../interfaces';
import { ICategoriesService } from './interfaces';


class CategoriesService implements ICategoriesService {

    async addCategorie({ categorie }: IFormCategorie, switchShowModalErr: () => void, switchShowModal:() => void) {

        try {
            const categorieValidated = validateString(categorie);

            this.checkStoreHasCategorie(categorieValidated);

            const newCategorie = this.createCategorie(categorieValidated);

            await categoriesApi.addCategorie(newCategorie,userStore.user._id);
            categoriesStore.addCatigorie(newCategorie);

        }
        catch (error) {
            console.log('Ошибка');
            switchShowModalErr();
        }
        finally {
            switchShowModal();
        }
    }


    async deleteCategorie(id: string) {
        try {
            await categoriesApi.deleteCategorie(id,userStore.user._id);
            categoriesStore.removeCategorie(id);

        }
        catch (error) {
            throw error;
        }
    }

    checkStoreHasCategorie(validatedCategorie: string) {

        const hasCategorie = categoriesStore.categories.some(({ categorie }) => categorie === validatedCategorie);

        if (hasCategorie) {
            throw new Error('Категория уже существует');
        }
    }

    createCategorie(categorie:string) {

        return {
            categorie : categorie,
            id        : categorie,
            spending  : 0,
        };
    }
}


export const categoriesService = new CategoriesService();
