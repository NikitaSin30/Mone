import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/service/helpers/validateString';
import { IFormIncome } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { IIncomeAPI } from 'api/IncomeApi';
import { TYPE_OPERATION_INCOME } from 'shared/service/factory/constants';
import { AbstractOperationService } from 'service/abstractClasses/AbstractOperationService';



class IncomeService extends AbstractOperationService {

    constructor(private incomeAPI:IIncomeAPI) {
        super();
        this.incomeAPI = incomeAPI;
    }

    async add({ income, sphere }:IFormIncome) {

        const modifytedSphere = validateString(sphere);
        const createdOperation = this.factoryOperation.createOperation(TYPE_OPERATION_INCOME , income, modifytedSphere);

        await this.incomeAPI.add(userStore.userID,createdOperation);

        incomeStore.addIncome(createdOperation);
        operationsStore.addOperation(createdOperation);

    }
}


export default IncomeService;
