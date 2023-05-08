import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from '../interfaces';
import { ISpendingService } from './interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { ISpendingApi } from 'api/SpendingApi';
import { IFactoryOperation } from 'shared/service/factory/interfaces';
import { validateString } from 'shared/service/helpers/validateString';
import { TYPE_OPERATION_SPENDING } from 'shared/service/factory/constants';


class SpendingService implements ISpendingService {

    constructor(private spendingService:ISpendingApi,private factoryOperation:IFactoryOperation) {
        this.spendingService = spendingService;
        this.factoryOperation = factoryOperation;
    }

    async addSpending( { spending,categorie } : IFormSpending, switchShowModal:()=>void) {

        const modifytedCategorie = validateString(categorie);
        const createdOperation =  this.factoryOperation.createOperation(TYPE_OPERATION_SPENDING,spending,modifytedCategorie);

        try {
            await this.spendingService.addSpending(userStore.user._id, createdOperation);

            spendingStore.addSpending(createdOperation);
            operationsStore.addOperation(createdOperation);
            categoriesStore.updateSpendingInCategorie(createdOperation);

        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
        finally {
            switchShowModal();
        }
    }
}


export default SpendingService;
