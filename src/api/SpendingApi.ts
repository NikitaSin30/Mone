import { ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';
import { ADD_SPENDING } from './path';



export interface ISpendingApi {
    addSpending:(id: string, spendingOperation: ISpendingOperation) => Promise<void>
}

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
            const result = response.json();

            return result;

        }
        catch (error) {
            throw error;
        }
    }
}


export default SpendingApi;
