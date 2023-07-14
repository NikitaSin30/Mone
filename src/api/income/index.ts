import { IIncomeOperation } from 'interfaces';
import { ADD_INCOME_URL } from 'api/path';
import { request } from 'api/request';

import { AbstractOperationAPI } from 'api/abstractClasses/AbstractOperationAPI';



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

            return await response.json();

        }
        catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Произошла ошибка');
        }
    }
}
