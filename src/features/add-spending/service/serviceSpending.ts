import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IFormSpending } from '../interfaces';
import { cashFlowApi } from 'api/CashFlowApi';
import { categoriesService } from 'features/add-categories/service/categoriesService';
import { ISpendingService } from './interfaces';
import { ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';


class SpendingService implements ISpendingService {

    async addSpending( newSpending : IFormSpending, switchShowModal:()=>void) {

        try {
            const res:ISpendingOperation =  await cashFlowApi.addSpending(userStore.userId, newSpending.spending,newSpending.categorie);

            spendingStore.addSpending(res);
            categoriesService.addSpendingInCategorie(res.categorie,res.spending);

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

}


export const spendingService = new SpendingService();
