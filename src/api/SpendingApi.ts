import { ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';
import { ADD_SPENDING_URL } from './path';
import { request } from './request/request';
import { AbstractOperationAPI } from './abstractClasses/AbstractOperationAPI';



export interface ISpendingAPI {
    add:(userID: string, spendingOperation: ISpendingOperation) => Promise<void>
}

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
            const result = response.json();

            return result;

        }
        catch (error) {
            throw error;
        }
    }
}
