import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from '../interfaces';
import { cashFlowApi } from 'api/CashFlowApi';
import { categoriesService } from 'features/add-categories/service/categoriesService';
import { ISpendingService } from './interfaces';
import { ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';


class SpendingService implements ISpendingService {

    async addSpending( newSpending : IFormSpending, switchShowModal:()=>void) {
        const createdOperation =  this.createOperation(newSpending.spending, newSpending.categorie);

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
        finally {
            switchShowModal();
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
