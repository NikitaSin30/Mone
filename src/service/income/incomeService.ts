import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { IFormIncome, IDataResponse, IResponseIncomeOperation } from 'interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { IIncomeAPI } from 'api/interfaces';
import { AbstractOperationService } from 'service/abstractClasses/AbstractOperationService';
import { IIncomeOperation } from 'interfaces';
import { EOperationType } from 'enum';
import { validateString } from 'shared/mappers/validateString';
import { OPERATION_INCOME } from 'shared/constants';
import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';



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

    async delete(incomeID:string) {
        const { data:deletedOperation } = await this.incomeAPI.delete<IDataResponse<IResponseIncomeOperation>>(incomeID,userStore.userID);

        incomeStore.updateAfterDeleteOperation(deletedOperation.income);
        balanceStore.updateAfterDeleteOperation(deletedOperation.income,OPERATION_INCOME);
        incomeStore.deleteOperation(incomeID);
        operationsStore.deleteOperation(incomeID);
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
