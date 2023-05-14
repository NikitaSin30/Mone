import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { ICategoriesApi } from './interfaces';
import { ADD_CATEGORIE,DELETE_CATEGORIE } from './path';
import { request } from './request/request';



export class CategoriesApi implements ICategoriesApi {

    async addCategorie(categorie : ICategorie, id: string) {

        try {
            const response = await request(ADD_CATEGORIE,'POST',{
                categorie,
                id,
            });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }
         

        }
        catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Приносим извинения.Произошла ошибка');
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
