import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { ISpendingOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';
import { IFormSpending } from '../interfaces/interfaces';
import { cashFlowApi } from 'api/CashFlowApi';
import { ISpendingService } from './interfaces/interfaces';


class SpendingService implements ISpendingService {

    async addSpending( newSpending : IFormSpending ) {
        const createdOperation =  this.createOperation(newSpending.spentMoney, newSpending.categorie);

        try {
           const response = await cashFlowApi.addSpending(userStore.user._id, createdOperation);
        //    кидать текс с бэка в ui на секунду
            console.log(response.message);
            spendingStore.addSpending(createdOperation);
            categoriesStore.updateSpandingInCategorie(newSpending);

        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }

     createOperation(spending: number, categorie: string) {
        return {
            spending  : spending,
            categorie : categorie,
            date      : new Date(),
        };
    }
}


export const spendingService = new SpendingService();
