import { DELETE_OPERATION } from 'api/path';
import { IOperationApi } from './interfaces';


class OperationsApi implements IOperationApi {

    async deleteOperation(idOperation:string,idUser:string,typeOperation:string) {

        try {
            const response = await fetch(DELETE_OPERATION,{
                method  : 'DELETE',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    idUser,
                    idOperation,
                    typeOperation,
                }),
            });

            if (!response.ok) {
                const errorMesage = await response.json();

                throw new Error(errorMesage);
            }

        }
        catch (error) {
            throw error;
        }
    }
}


export default OperationsApi;
