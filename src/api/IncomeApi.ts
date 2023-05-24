import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces';
import { ADD_INCOME_URL } from './path';

export interface IIncomeApi{
    addIncome:(incomeOperation: IIncomeOperation, idUser: string) => Promise<void>
}

class IncomeApi implements IIncomeApi {

    async addIncome(incomeOperation: IIncomeOperation, idUser: string) {
        try {
            const response = await fetch(ADD_INCOME_URL, {
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    incomeOperation,
                    idUser,
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
