import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';
import { ICashFlowApi } from './interfaces';
import * as PATH from './path/index';
import { checkError } from 'shared/helpers/checkError';
import { request } from './request/request';


class CashFlowApi implements ICashFlowApi {
    async addIncome(incomeOperation: IIncomeOperation, id: string) {
        try {

            const response = await request(PATH.ADD_INCOME,'POST',{
                incomeOperation,
                id,
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

    async addAccumulation(id: string, accumulationOperation: IAccumulationOperation) {

        try {

            const response = await request(PATH.ADD_ACCUMULATION,'POST',{
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
            throw checkError(error);
        }
    }

    async addSpending(id: string, spendingOperation: ISpendingOperation) {

        try {

            const response = await request(PATH.ADD_SPENDING,'POST',{
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
