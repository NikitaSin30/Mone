import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/mappers/validateString';
import { ICategorie, IFormCategorie, IDataResponse, IResponseCategorie } from 'interfaces';
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

        const newCategorie = this.createCategorie(categorieValidated);

        const { data } =  await this.categoriesAPI.add<IDataResponse<IResponseCategorie>>(newCategorie,userStore.userID);

        categoriesStore.add(data);

    }


    async delete(categorieID: string) {

        await this.categoriesAPI.delete(categorieID,userStore.userID);
        categoriesStore.delete(categorieID);

    }

    private checkStoreHasCategorie(validatedCategorie: string) {

        const hasCategorie = categoriesStore.categories.some(({ categorie }) => categorie === validatedCategorie);

        if (hasCategorie) {
            throw new Error('Категория уже существует');
        }
    }

    private createCategorie(categorie:string):ICategorie {

        return {
            categorie : categorie,
            spending  : 0,
        };
    }
}
