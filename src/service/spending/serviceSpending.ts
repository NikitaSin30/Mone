import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending, IDataResponse, IResponseSpendingOperation } from 'interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { ISpendingAPI } from 'api/interfaces';
import { AbstractOperationService } from 'service/abstractClasses/AbstractOperationService';
import { ISpendingOperation } from 'interfaces';
import { EOperationType } from 'enum';
import { validateString } from 'shared/mappers/validateString';
import { OPERATION_SPENDING } from 'shared/constants';
import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';



export class SpendingService extends AbstractOperationService {
    private spendingAPI:ISpendingAPI;

    constructor(spendingAPI:ISpendingAPI) {
        super();
        this.spendingAPI = spendingAPI;
    }

    async add( formSpending : IFormSpending) {
        const createdOperation =  this.createOperation(formSpending);

        const { data } = await this.spendingAPI.add<IDataResponse<IResponseSpendingOperation>>(userStore.userID, createdOperation);

        spendingStore.addSpending(data);
        operationsStore.addOperation(data);
        categoriesStore.updateSpendingInCategorie(data);

    }

    async delete(spendingID:string) {
        const { data:deletedOperation } = await this.spendingAPI.delete<IDataResponse<IResponseSpendingOperation>>(spendingID,userStore.userID);

        spendingStore.updateAfterDeleteOperation(deletedOperation.spending);
        balanceStore.updateAfterDeleteOperation(deletedOperation.spending,OPERATION_SPENDING);
        spendingStore.deleteOperation(spendingID);
        operationsStore.deleteOperation(spendingID);
    }

    createOperation({ spending,categorie } : IFormSpending): ISpendingOperation {
        const validatedCategorie = validateString(categorie);

        return {
            spending,
            categorie : validatedCategorie,
            type      : EOperationType.Spending,
        };
    }
}
