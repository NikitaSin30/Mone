import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { ICategoriesApi } from './interfaces';
import { ADD_CATEGORIE } from './path';



export class CategoriesApi implements ICategoriesApi {

    async addCategorie(categorie : ICategorie, id: string) {

        try {
            const response = await fetch(ADD_CATEGORIE,{
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    categorie,
                    id,
                }),
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

}

export const categoriesApi = new CategoriesApi();
