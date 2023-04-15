import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';
import { ICashFlowApi } from './interfaces';
import * as PATH from './path/index';


class CashFlowApi implements ICashFlowApi {
    async addIncome(incomeOperation: IIncomeOperation, id: string) {
        try {
            const response = await fetch(PATH.ADD_INCOME, {
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

            const result = response.json();

            return result;
        }
        catch (error) {
            throw error;
        }
    }

    async addAccumulation(id: string, accumulationOperation: IAccumulationOperation) {

        try {
            const response = await fetch(PATH.ADD_ACCUMULATION, {
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
            const result = await response.json();

            return result;
        }
        catch (error) {
            throw error;
        }
    }

    async addSpending(id: string, spendingOperation: ISpendingOperation) {

        try {
            const response = await fetch(PATH.ADD_SPENDING, {
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    spendingOperation,
                    id,
                }),
            });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }
            const result = response.json();

            return result;

        }
        catch (error) {
            throw error;
        }
    }
}


export const cashFlowApi = new CashFlowApi();
