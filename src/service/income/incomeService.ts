import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { IFormIncome } from 'interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { IIncomeAPI } from 'api/interfaces';
import { AbstractOperationService } from 'service/abstractClasses/AbstractOperationService';
import { IIncomeOperation } from 'interfaces';
import { EOperationType } from 'enum';
import { validateString } from 'shared/mappers/validateString';



export class IncomeService extends AbstractOperationService {
    private incomeAPI:IIncomeAPI;

    constructor(incomeAPI:IIncomeAPI) {
        super();
        this.incomeAPI = incomeAPI;
    }

    async add(data:IFormIncome) {
        const createdOperation = this.createOperation(data);

        await this.incomeAPI.add(userStore.userID,createdOperation);

        incomeStore.addIncome(createdOperation);
        operationsStore.addOperation(createdOperation);

    }

    createOperation({ income,sphere } : IFormIncome):IIncomeOperation {
        const validatedCategorie = validateString(sphere);

        return {
            income,
            sphere : validatedCategorie,
            date   : new Date().toLocaleDateString(),
            type   : EOperationType.Income,
        };
    }
}
