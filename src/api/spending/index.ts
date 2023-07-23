import { ISpendingOperation } from 'interfaces';
import { ADD_SPENDING_URL, DELETE_SPENDING_URL } from 'api/path';
import { request } from 'api/request';
import { AbstractOperationAPI } from 'api/abstractClasses/AbstractOperationAPI';



export class SpendingAPI extends AbstractOperationAPI {
    async add(userID: string, spendingOperation: ISpendingOperation) {
        try {
            const response = await request(ADD_SPENDING_URL,'POST',{
                spendingOperation,
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

    async delete<T>(operationID:string,userID:string):Promise<T> {

        try {
            const response = await fetch(DELETE_SPENDING_URL,{
                method  : 'DELETE',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    userID,
                    operationID,
                }),
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
}
