import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';
import { ICashFlowApi } from './interfaces';
import { ADD_INCOME_URL,ADD_ACCUMULATION_URL,ADD_SPENDING_URL } from './path/index';
import { request } from './request/request';


class CashFlowApi implements ICashFlowApi {
    async addIncome(incomeOperation: IIncomeOperation, id: string) {
        try {

            const response = await request(ADD_INCOME_URL,'POST',{
                incomeOperation,
                id,
            });


            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }

        }
        catch (error) {
            throw error;
        }
    }

    async addAccumulation(id: string, accumulationOperation: IAccumulationOperation) {

        try {

            const response = await request(ADD_ACCUMULATION_URL,'POST',{
                accumulationOperation,
                id,
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

    async addSpending(id: string, spendingOperation: ISpendingOperation) {

        try {

            const response = await request(ADD_SPENDING_URL,'POST',{
                spendingOperation,
                id,
            });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }
        }
        catch (error) {
            throw error;
        }
    }
}


export const cashFlowApi = new CashFlowApi();
