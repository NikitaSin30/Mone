import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';
import { ADD_ACCUMULATION } from './path';
import { checkError } from 'shared/service/helpers/checkError';

export interface IAccumulationApi{
    addAccumulation:(id: string, accumulationOperation: IAccumulationOperation) => Promise<void>
}

class AccumulationApi implements IAccumulationApi {
    async addAccumulation(id: string, accumulationOperation: IAccumulationOperation) {

        try {
            const response = await fetch(ADD_ACCUMULATION, {
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    accumulationOperation,
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
            throw checkError(error);
        }
    }
}


export default AccumulationApi;
