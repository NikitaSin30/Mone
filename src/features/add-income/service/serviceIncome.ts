import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { cashDB } from 'server/CashDB';
import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';
import { userStore } from 'shared/store/userStore/UserStore';
import { IServiceIncome } from '../interfaces/interfaces';


class ServiceIncome implements IServiceIncome {
    async midilwareAddIncome(income:number, sphere:string) {
        const createdOperation = this.createOperations(income,sphere);

        incomeStore.addIncome(createdOperation);

        try {
            await cashDB.addIncome(userStore.userId, createdOperation);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }

    }

    private createOperations(income:number,sphere:string): IIncomeOperation {
        const operation: IIncomeOperation = {
            income : income,
            sphere : sphere,
            date   : new Date(),
        };

        return operation;
    }
}

export const serviceIncome = new ServiceIncome();
