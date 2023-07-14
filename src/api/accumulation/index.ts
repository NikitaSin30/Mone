import { IAccumulationOperation } from 'interfaces';
import { ADD_ACCUMULATION_URL } from 'api/path';
import { request } from 'api/request';
import { AbstractOperationAPI } from 'api/abstractClasses/AbstractOperationAPI';



export class AccumulationAPI extends AbstractOperationAPI {

    async add<T>(userID: string, accumulationOperation: IAccumulationOperation):Promise<T> {

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
