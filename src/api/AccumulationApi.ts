import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';
import { ADD_ACCUMULATION_URL } from './path';
import { request } from './request/request';
import { AbstractOperationAPI } from './abstractClasses/AbstractOperationAPI';

export interface IAccumulationAPI{
    add:(userID: string, accumulationOperation: IAccumulationOperation) => Promise<void>
}

export class AccumulationAPI extends AbstractOperationAPI {

    async add(userID: string, accumulationOperation: IAccumulationOperation) {

        try {
            const response = await request(ADD_ACCUMULATION_URL,'POST',{
                accumulationOperation,
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
}
