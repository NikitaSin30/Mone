import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from '../interfaces/interfaces';
import { cashFlowApi } from 'api/CashFlowApi';
import { ISpendingService } from './interfaces/interfaces';


class SpendingService implements ISpendingService {

    async addSpending( newSpending : IFormSpending, switchShowModal:()=>void) {
        const createdOperation =  this.createOperation(newSpending.spending, newSpending.categorie);

        try {
            await cashFlowApi.addSpending(userStore.userId, newSpending);
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
