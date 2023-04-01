import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';
import { userStore } from 'shared/store/userStore/UserStore';
import { IServiceIncome } from './interfaces/interfaces';


class IncomeService implements IServiceIncome {
    async addIncome(income:number, sphere:string) {
        const createdOperation = this.createOperations(income,sphere);

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
