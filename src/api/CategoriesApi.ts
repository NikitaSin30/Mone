import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { ICategoriesApi, IResponseMessage } from './interfaces';
import { DELETE_CATEGORIE } from './path';
import { request } from './request/request';


export class CategoriesApi implements ICategoriesApi {

    async addCategorie(categorie : ICategorie, id: string) {

        try {
            const response = await request('http://localhost:3002/categories/addcategorie','POST',{
                categorie,
                id,
            });

            if (!response.ok) {
                throw new Error('');
            }

            const result : IResponseMessage = await response.json();

            return result;
        }
        catch (error) {
            throw new Error();
        }
    }

    async deleteCategorie(idCategorie: string, id: string) {

        try {
            const response = await request(DELETE_CATEGORIE,'DELETE',{
                idCategorie,
                id,
            });


            if (!response.ok) {
                const errorMessage = await response.json();

                throw new Error(errorMessage.message);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Приносим извенение. Произошла ошибка');
        }
    }

}

export const categoriesApi = new CategoriesApi();
