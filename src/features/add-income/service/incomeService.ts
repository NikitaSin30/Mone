import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { cashFlowApi } from 'api/cashFlowApi';
import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';
import { userStore } from 'shared/store/userStore/UserStore';
import { IServiceIncome } from './interfaces/interfaces';
import { mapperModificationString } from 'shared/mappers/mapperModificationString';


class IncomeService implements IServiceIncome {
    async addIncome(income:number, sphere:string) {
         const modifytedSphere = mapperModificationString(sphere)

        try {
           const res = await cashFlowApi.addIncome(userStore.userId, income, modifytedSphere);
            incomeStore.addIncome(res);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }

    }


export const incomeService = new IncomeService();
