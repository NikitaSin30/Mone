import { categoriesApi } from 'api/CategoriesApi';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/helpers/validateString';
import { IFormCategorie } from '../interfaces';
import { ICategoriesService } from './interfaces';



class CategoriesService implements ICategoriesService {

    async addCategorie({ categorie }: IFormCategorie) {

        const categorieValidated = validateString(categorie);

        this.checkStoreHasCategorie(categorieValidated);

        const newCategorie = this.createCategorie(categorieValidated);

        await categoriesApi.addCategorie(newCategorie,userStore.idUser);
        categoriesStore.addCatigorie(newCategorie);

    }


    async deleteCategorie(idCategorie: string) {

        await categoriesApi.deleteCategorie(idCategorie,userStore.idUser);
        categoriesStore.deleteCategorie(idCategorie);

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
