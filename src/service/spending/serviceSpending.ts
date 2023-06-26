import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from 'interfaces';
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

    async add( data : IFormSpending) {
        const createdOperation =  this.createOperation(data);

        await this.spendingAPI.add(userStore.userID, createdOperation);

        spendingStore.addSpending(createdOperation);
        operationsStore.addOperation(createdOperation);
        categoriesStore.updateSpendingInCategorie(createdOperation);

    }

    createOperation({ spending,categorie } : IFormSpending): ISpendingOperation {
        const validatedCategorie = validateString(categorie);

        return {
            spending,
            categorie : validatedCategorie,
            date      : new Date().toLocaleDateString(),
            type      : EOperationType.Spending,
        };
    }
}
