import { ICategorie } from 'interfaces';
import { ICategoriesAPI } from 'api/interfaces';
import { ADD_CATEGORIE_URL,DELETE_CATEGORIE_URL } from 'api/path';
import { request } from 'api/request';



export class CategoriesAPI implements ICategoriesAPI {

    async add<T>(categorie : ICategorie, userID: string) : Promise<T> {

        try {
            const response = await request(ADD_CATEGORIE_URL,'POST',{
                categorie,
                userID,
            });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }

            return await response.json();

        }
        catch (error) {
            throw error;

        }
    }

    async delete(categorieID: string, userID: string) {

        try {
            const response = await request(DELETE_CATEGORIE_URL,'DELETE',{
                categorieID,
                userID,
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
