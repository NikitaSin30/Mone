import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { IFormIncome, IDataResponse, IResponseIncomeOperation } from 'interfaces';
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

    async add(formIncome:IFormIncome) {
        const createdOperation = this.createOperation(formIncome);

        const { data } = await this.incomeAPI.add<IDataResponse<IResponseIncomeOperation>>(userStore.userID,createdOperation);

        incomeStore.addIncome(data);
        operationsStore.addOperation(data);

    }

    createOperation({ income,sphere } : IFormIncome):IIncomeOperation {
        const validatedCategorie = validateString(sphere);

        return {
            income,
            sphere : validatedCategorie,
            type   : EOperationType.Income,
        };
    }
}
