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
        const createdOperation = this.createOperations(income,modifytedSphere);

        try {
            const response = await cashFlowApi.addIncome(createdOperation, userStore.user._id);

            //    ===== кидать текст в ui

            console.log(response.message);
            incomeStore.addIncome(createdOperation);
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
    createOperations(income:number,sphere:string): IIncomeOperation {
        return {
            income : income,
            sphere : sphere,
            date   : new Date(),
        };
    }
}


export const incomeService = new IncomeService();
