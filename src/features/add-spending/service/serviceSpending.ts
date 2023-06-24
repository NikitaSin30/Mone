import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { ISpendingAPI } from 'api/SpendingApi';
import { validateString } from 'shared/service/helpers/validateString';
import { TYPE_OPERATION_SPENDING } from 'shared/service/factory/constants';
import { AbstractOperationService } from 'service/abstractClasses/AbstractOperationService';



export class SpendingService extends AbstractOperationService {

    constructor(private spendingAPI:ISpendingAPI) {
        super();
        this.spendingAPI = spendingAPI;
    }

    async add( { spending,categorie } : IFormSpending) {

        const modifytedCategorie = validateString(categorie);
        const createdOperation =  this.factoryOperation.createOperation(TYPE_OPERATION_SPENDING,spending,modifytedCategorie);

        await this.spendingAPI.add(userStore.userID, createdOperation);

        spendingStore.addSpending(createdOperation);
        operationsStore.addOperation(createdOperation);
        categoriesStore.updateSpendingInCategorie(createdOperation);

    }
}



