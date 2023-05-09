import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/service/helpers/validateString';
import { IFormCategorie } from '../interfaces';
import { ICategoriesService } from './interfaces';
import { ICategoriesApi } from 'api/categoriesApi/interfaces';



class CategoriesService implements ICategoriesService {
    private categoriesApi:ICategoriesApi;

    constructor(categoriesApi:ICategoriesApi) {
        this.categoriesApi = categoriesApi;
    }

    async addCategorie({ categorie }: IFormCategorie, switchShowModalErr: () => void, switchShowModal:() => void) {

        try {
            const categorieValidated = validateString(categorie);

            this.checkStoreHasCategorie(categorieValidated);

            const modifiedCategorie = this.createCategorie(categorieValidated);

            const { categorieWithID } = await this.categoriesApi.addCategorie(modifiedCategorie,userStore.user._id);

            categoriesStore.addCatigorie(categorieWithID);

        }
        catch (error) {
            console.log('Ошибка');
            switchShowModalErr();
        }
        finally {
            switchShowModal();
        }
    }


    async deleteCategorie(idCategorie: string) {
        try {
            await this.categoriesApi.deleteCategorie(idCategorie,userStore.user._id);
            categoriesStore.deleteCategorie(idCategorie);

        }
        catch (error) {
            throw error;
        }
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
            spending  : 0,
        };
    }
}


export default CategoriesService;
