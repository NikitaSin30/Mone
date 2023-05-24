import { ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';
import { ADD_SPENDING_URL } from './path';



export interface ISpendingApi {
    addSpending:(idUser: string, spendingOperation: ISpendingOperation) => Promise<void>
}

class SpendingApi implements ISpendingApi {
    async addSpending(idUser: string, spendingOperation: ISpendingOperation) {

        try {
            const response = await fetch(ADD_SPENDING_URL, {
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    spendingOperation,
                    idUser,
                }),
            });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }
            const result = response.json();

            return result;

        }
        catch (error) {
            throw error;
        }
    }
}


export default SpendingApi;
