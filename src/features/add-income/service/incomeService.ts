import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/mappers/validateString';
import { IServiceIncome } from './interfaces';
import { IFormIncome } from '../interfaces';



class IncomeService implements IServiceIncome {
    async addIncome({ income,sphere }:IFormIncome) {
        const modifytedSphere = validateString(sphere);
        const createdOperation = this.createOperation(income,modifytedSphere);

        try {
            await cashFlowApi.addIncome(createdOperation, userStore.user._id);

            incomeStore.addIncome(createdOperation);
        }
        catch (error) {
            throw error;
        }

    }
    createOperation(income:number,sphere:string): IIncomeOperation {
        return {
            income : income,
            sphere : sphere,
            date   : new Date(),
        };
    }
}


export const incomeService = new IncomeService();
