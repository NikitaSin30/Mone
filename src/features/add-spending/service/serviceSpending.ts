import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from '../interfaces';
import { cashFlowApi } from 'api/CashFlowApi';
import { ISpendingService } from './interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';



class SpendingService implements ISpendingService {

    async addSpending( newSpending : IFormSpending) {
        const createdOperation =  this.createOperation(newSpending.spending, newSpending.categorie);

        await cashFlowApi.addSpending(userStore.idUser, createdOperation);

        spendingStore.addSpending(createdOperation);
        operationsStore.addOperation(createdOperation);
        categoriesStore.updateSpendingInCategorie(newSpending);

    }
    createOperation(spending: number, categorie: string) {
        return {
            spending  : spending,
            categorie : categorie,
            date      : new Date().toLocaleDateString(),
        };
    }

}


export const spendingService = new SpendingService();
