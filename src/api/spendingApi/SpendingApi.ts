import { ISpendingOperation } from 'features/add-spending/service/interfaces';
import { ADD_SPENDING } from '../path';
import { ISpendingApi } from './interfaces';



class SpendingApi implements ISpendingApi {
    async addSpending(id: string, spendingOperation: ISpendingOperation) {

        try {
            const response = await fetch(ADD_SPENDING, {
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    spendingOperation,
                    id,
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


export default SpendingApi;
