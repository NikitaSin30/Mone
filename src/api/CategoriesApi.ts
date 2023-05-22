import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { ICategoriesApi } from './interfaces';
import { ADD_CATEGORIE_URL,DELETE_CATEGORIE_URL } from './path';
import { request } from './request/request';



export class CategoriesApi implements ICategoriesApi {

    async addCategorie(categorie : ICategorie, id: string) {

        try {
            const response = await request(ADD_CATEGORIE_URL,'POST',{
                categorie,
                id,
            });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }


        }
        catch (error) {
            throw error;

        }
    }

    async deleteCategorie(idCategorie: string, id: string) {

        try {
            const response = await request(DELETE_CATEGORIE_URL,'DELETE',{
                idCategorie,
                id,
            });


            if (!response.ok) {
                const errorMessage = await response.json();

                throw new Error(errorMessage.message);
            }
        }
        catch (error) {
            throw error;
        }
    }

}

export const categoriesApi = new CategoriesApi();
