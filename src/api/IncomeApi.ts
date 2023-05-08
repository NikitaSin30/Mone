import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces';
import { ADD_INCOME } from './path';

export interface IIncomeApi{
    addIncome:(incomeOperation: IIncomeOperation, id: string) => Promise<void>
}
class IncomeApi implements IIncomeApi {

    async addIncome(incomeOperation: IIncomeOperation, id: string) {
        try {
            const response = await fetch(ADD_INCOME, {
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    incomeOperation,
                    id,
                }),
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

export default IncomeApi;
