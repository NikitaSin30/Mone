import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { ISpendingOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';
import { IFormSpending } from '../interfaces/interfaces';
import { cashFlowApi } from 'api/cashFlowApi';
import { ISpendingService } from './interfaces/interfaces';


class SpendingService implements ISpendingService {

    async addSpending( {spentMoney,categorie} : IFormSpending ) {

        try {
          const res:ISpendingOperation =  await cashFlowApi.addSpending(userStore.userId, spentMoney,categorie);
            spendingStore.addSpending(res);
            categoriesStore.updateSpandingInCategorie(res.categorie,res.spending);

        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }

}


export const spendingService = new SpendingService();
