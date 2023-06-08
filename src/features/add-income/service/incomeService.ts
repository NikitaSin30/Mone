import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { EOperationType, IIncomeOperation } from 'shared/store/cashFlowStore/interfaces';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/helpers/validateString';
import { IServiceIncome } from './interfaces';
import { IFormIncome } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';



class IncomeService implements IServiceIncome {

    async addIncome({ income,sphere }:IFormIncome) {
        const modifytedSphere = validateString(sphere);
        const operation = this.createOperation(income,modifytedSphere);

        await cashFlowApi.addIncome(operation, userStore.idUser);

        incomeStore.addIncome(operation);
        operationsStore.addOperation(operation);


    }
    createOperation(income:number,sphere:string): IIncomeOperation {
        return {
            income : income,
            sphere : sphere,
            type   : EOperationType.Income,
            date   : new Date().toLocaleDateString(),
        };
    }
}


export const incomeService = new IncomeService();
