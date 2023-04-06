import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/mappers/validateString';
import { IServiceIncome } from './interfaces';
import { IFormIncome } from '../interfaces';



class IncomeService implements IServiceIncome {
    async addIncome({ income,sphere }:IFormIncome,switchShowModal:()=>void) {
        const modifytedSphere = validateString(sphere);

        try {
            const res = await cashFlowApi.addIncome(userStore.userId, income, modifytedSphere);

            incomeStore.addIncome(res);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
        finally {
            switchShowModal();
        }
    }

}


export const incomeService = new IncomeService();
