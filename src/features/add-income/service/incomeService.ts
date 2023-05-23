import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/helpers/validateString';
import { IServiceIncome } from './interfaces';
import { IFormIncome } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';



class IncomeService implements IServiceIncome {

    async addIncome({ income,sphere }:IFormIncome) {
        const modifytedSphere = validateString(sphere);
        const createdOperation = this.createOperation(income,modifytedSphere);

        await cashFlowApi.addIncome(createdOperation, userStore.idUser);

        incomeStore.addIncome(createdOperation);
        operationsStore.addOperation(createdOperation);


    }
    createOperation(income:number,sphere:string): IIncomeOperation {
        return {
            income : income,
            sphere : sphere,
            date   : new Date().toLocaleDateString(),
        };
    }
}


export const incomeService = new IncomeService();
