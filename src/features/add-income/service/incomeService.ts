import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/service/helpers/validateString';
import { IServiceIncome } from './interfaces';
import { IFormIncome } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { IIncomeApi } from 'api/incomeApi/interfaces';
import { IFactoryOperation } from 'shared/service/factory/interfaces';
import { OPERATION_INCOME } from 'shared/service/factory/constants';


class IncomeService implements IServiceIncome {

    constructor(private incomeApi:IIncomeApi,private factoryOperation:IFactoryOperation) {
        this.incomeApi = incomeApi;
        this.factoryOperation = factoryOperation;
    }

    async addIncome({ income, sphere }:IFormIncome) {

        const modifytedSphere = validateString(sphere);
        const createdOperation = this.factoryOperation.createOperation(OPERATION_INCOME , income, modifytedSphere);

        try {
            const { incomeOperationWithID } = await this.incomeApi.addIncome(createdOperation, userStore.user._id);

            incomeStore.addIncome(incomeOperationWithID);
            operationsStore.addOperation(incomeOperationWithID);

        }
        catch (error) {
            throw error;
        }

    }
}


export default IncomeService;
