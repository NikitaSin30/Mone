import { IIncomeOperation } from 'interfaces';
import { ADD_INCOME_URL } from './path';
import { request } from './request/request';

import { AbstractOperationAPI } from './abstractClasses/AbstractOperationAPI';



export class IncomeAPI extends AbstractOperationAPI {

    async add( userID: string,incomeOperation: IIncomeOperation) {

        try {
            const response = await request(ADD_INCOME_URL,'POST',{
                incomeOperation,
                userID,
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
            throw new Error('Произошла ошибка');
        }
    }
}
