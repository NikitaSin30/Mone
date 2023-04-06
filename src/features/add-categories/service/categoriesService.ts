import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { categorieApi } from 'api/CategoriesApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { validateString } from 'shared/mappers/validateString';
import { IFormCategorie } from '../interfaces';
import { ICategoriesService } from './interfaces';


class CategoriesService implements ICategoriesService {

    async addCategorie({ categorie }: IFormCategorie, showModalError: () => void, switchShowModal: () => void) {
        const categorieValidated = validateString(categorie);
        const hasCategorie = this.checkStoreHasCategorie(categorieValidated);

        if (hasCategorie) return showModalError();

        try {
            const res: ICategorie = await categorieApi.addCategorie(categorieValidated, userStore.userId);

            categoriesStore.addCatigorie(res);
        }
        catch (error) {
            return new Error();
        }
        finally {
            switchShowModal();
        }
    }

    async deleteCategorie(id: string) {
        try {
            const categorie: ICategorie = categoriesStore.getCategorie(id);

            await categorieApi.deleteCategorie(categorie.key!, userStore.userId);
            categoriesStore.removeCategorie(id);
        }
        catch (error) {
            return new Error();
        }
    }

    async addSpendingInCategorie(id: string, spending: number) {
        const categorie: ICategorie = categoriesStore.getCategorie(id);
        const updatedCategorie: ICategorie = {
            ...categorie,
            spending : categorie.spending + spending,
        };

        try {
            await categorieApi.addSpendingInCategorie(updatedCategorie, userStore.userId);
            categoriesStore.updateCategories(updatedCategorie);
        }
        catch (error) {
            console.log('Ошибка');

        }
    }
    checkStoreHasCategorie(validatedCategorie: string) {
        return categoriesStore.categories.some(({ categorie }) => categorie === validatedCategorie);
    }
}


export const categoriesService = new CategoriesService();
