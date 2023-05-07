import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { ICategoriesApi, IResponseMessage } from './interfaces';
import { DELETE_CATEGORIE } from './path';

export class CategoriesApi implements ICategoriesApi {

    async addCategorie(categorie : ICategorie, id: string) {

        try {
            const response = await fetch('http://localhost:3002/categories/addcategorie',{
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
            const response = await fetch(DELETE_CATEGORIE,{
                method  : 'DELETE',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    idCategorie,
                    id,
                }),
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

export default CategoriesApi;
