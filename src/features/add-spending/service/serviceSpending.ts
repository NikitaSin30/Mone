import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from '../interfaces';
import { ISpendingService } from './interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { ISpendingApi } from 'api/spendingApi/interfaces';
import { IFactoryOperation } from 'shared/service/factory/interfaces';
import { validateString } from 'shared/service/helpers/validateString';
import { TYPE_OPERATION_SPENDING } from 'shared/service/factory/constants';


class SpendingService implements ISpendingService {

    constructor(private spendingService:ISpendingApi,private factoryOperation:IFactoryOperation) {
        this.spendingService = spendingService;
        this.factoryOperation = factoryOperation;
    }

    async addSpending( { spending,categorie } : IFormSpending) {

        const modifytedCategorie = validateString(categorie);
        const createdOperation =  this.factoryOperation.createOperation(TYPE_OPERATION_SPENDING,spending,modifytedCategorie);

        try {
            const { spendingOperationWithID } = await this.spendingService.addSpending(userStore.user._id, createdOperation);

            spendingStore.addSpending(spendingOperationWithID);
            operationsStore.addOperation(spendingOperationWithID);
            categoriesStore.updateSpendingInCategorie(spendingOperationWithID);

        }
        catch (error) {
            throw error;
        }
    }
}


export default SpendingService;
