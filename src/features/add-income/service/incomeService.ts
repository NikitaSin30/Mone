import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { IIncomeOperation, ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/service/helpers/validateString';
import { IServiceIncome } from './interfaces';
import { IFormIncome } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { IIncomeApi } from 'api/IncomeApi';
import { IFactoryOperation } from 'shared/service/factory/interfaces';
import { TYPE_OPERATION_INCOME } from 'shared/service/factory/constants';


class IncomeService implements IServiceIncome {

    constructor(private incomeApi:IIncomeApi,private factoryOperation:IFactoryOperation) {
        this.incomeApi = incomeApi;
        this.factoryOperation = factoryOperation;
    }

    async addIncome({ income, sphere }:IFormIncome) {

        const modifytedSphere = validateString(sphere);
        const createdOperation = this.factoryOperation.createOperation(TYPE_OPERATION_INCOME , income, modifytedSphere);

        try {
            await this.incomeApi.addIncome(createdOperation, userStore.user._id);

            incomeStore.addIncome(createdOperation);
            operationsStore.addOperation(createdOperation);

        }
        catch (error) {
            throw error;
        }

    }
}


export default IncomeService;
