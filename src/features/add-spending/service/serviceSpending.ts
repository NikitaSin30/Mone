import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from '../interfaces';
import { cashFlowApi } from 'api/CashFlowApi';
import { ISpendingService } from './interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { EOperationType, ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';


class SpendingService implements ISpendingService {

    async addSpending( newSpending : IFormSpending) {
        const operation =  this.createOperation(newSpending.spending, newSpending.categorie);

        await cashFlowApi.addSpending(userStore.idUser, operation);

        spendingStore.addSpending(operation);
        operationsStore.addOperation(operation);
        categoriesStore.updateSpendingInCategorie(newSpending);

    }
    createOperation(spending: number, categorie: string):ISpendingOperation {
        return {
            spending  : spending,
            categorie : categorie,
            type      : EOperationType.Spending,
            date      : new Date().toLocaleDateString(),
        };
    }

}


export const spendingService = new SpendingService();
