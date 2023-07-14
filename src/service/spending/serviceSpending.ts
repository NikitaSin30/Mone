import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending, IDataResponse, IResponseSpendingOperation } from 'interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { ISpendingAPI } from 'api/interfaces';
import { AbstractOperationService } from 'service/abstractClasses/AbstractOperationService';
import { ISpendingOperation } from 'interfaces';
import { EOperationType } from 'enum';
import { validateString } from 'shared/mappers/validateString';



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

    createOperation({ spending,categorie } : IFormSpending): ISpendingOperation {
        const validatedCategorie = validateString(categorie);

        return {
            spending,
            categorie : validatedCategorie,
            type      : EOperationType.Spending,
        };
    }
}
