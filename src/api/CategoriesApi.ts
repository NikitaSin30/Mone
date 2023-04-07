import { ICategorie } from 'shared/store/categoriesStore/interfaces';



class CategoriesApi {

    async addCategorie(categorie: string, userId: string) {
        try {




        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }

    async deleteCategorie(key: string, userId: string) {
        try {

        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }

    async addSpendingInCategorie(categorie: ICategorie, userId: string) {
        try {

        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }
}

export const categorieApi = new CategoriesApi();
