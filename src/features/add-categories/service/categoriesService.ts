import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/service/helpers/validateString';
import { IFormCategorie } from '../interfaces';
import { ICategoriesService } from './interfaces';
import { ICategoriesApi } from 'api/interfaces';



class CategoriesService implements ICategoriesService {
    private categoriesApi:ICategoriesApi;

    constructor(categoriesApi:ICategoriesApi) {
        this.categoriesApi = categoriesApi;
    }

    async addCategorie({ categorie }: IFormCategorie) {

        const categorieValidated = validateString(categorie);

        this.checkStoreHasCategorie(categorieValidated);

        const newCategorie = this.createCategorie(categorieValidated);

        await this.categoriesApi.addCategorie(newCategorie,userStore.idUser);
        categoriesStore.addCatigorie(newCategorie);

    }


    async deleteCategorie(idCategorie: string) {

        await this.categoriesApi.deleteCategorie(idCategorie,userStore.idUser);
        categoriesStore.deleteCategorie(idCategorie);


    }

    private checkStoreHasCategorie(validatedCategorie: string) {

        const hasCategorie = categoriesStore.categories.some(({ categorie }) => categorie === validatedCategorie);

        if (hasCategorie) {
            throw new Error('Категория уже существует');
        }
    }

    private createCategorie(categorie:string) {

        return {
            categorie : categorie,
            id        : categorie,
            spending  : 0,
        };
    }
}


export default CategoriesService;
