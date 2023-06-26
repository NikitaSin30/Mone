import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/mappers/validateString';
import { IFormCategorie } from 'interfaces';
import { ICategoriesService } from './interfaces';
import { ICategoriesAPI } from 'api/interfaces';



export class CategorieService implements ICategoriesService {
    private categoriesAPI:ICategoriesAPI;

    constructor(categoriesAPI:ICategoriesAPI) {
        this.categoriesAPI = categoriesAPI;
    }

    async add({ categorie }: IFormCategorie) {

        const categorieValidated = validateString(categorie);

        this.checkStoreHasCategorie(categorieValidated);

        const newCategorie = this.create(categorieValidated);

        await this.categoriesAPI.add(newCategorie,userStore.userID);
        categoriesStore.addCatigorie(newCategorie);

    }


    async delete(categorieID: string) {

        await this.categoriesAPI.delete(categorieID,userStore.userID);
        categoriesStore.deleteCategorie(categorieID);

    }

    private checkStoreHasCategorie(validatedCategorie: string) {

        const hasCategorie = categoriesStore.categories.some(({ categorie }) => categorie === validatedCategorie);

        if (hasCategorie) {
            throw new Error('Категория уже существует');
        }
    }

    private create(categorie:string) {

        return {
            categorie : categorie,
            id        : categorie,
            spending  : 0,
        };
    }
}
