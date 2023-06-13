import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';
import { ADD_ACCUMULATION_URL } from './path';


export interface IAccumulationApi{
    addAccumulation:(idUser: string, accumulationOperation: IAccumulationOperation) => Promise<void>
}

class AccumulationApi implements IAccumulationApi {
    async addAccumulation(idUser: string, accumulationOperation: IAccumulationOperation) {

        try {
            const response = await fetch(ADD_ACCUMULATION_URL, {
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    accumulationOperation,
                    idUser,
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


export default AccumulationApi;
