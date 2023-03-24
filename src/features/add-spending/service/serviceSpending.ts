import { userStore } from 'shared/store/userStore/UserStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { ISpendingOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';
import { IFormSpending } from '../interfaces/interfaces';
import { cashDB } from 'server/CashDB';



class SpendingService {

    async addSpending( newSpending : IFormSpending ) {
        const createdOperation =  this.createOperations(newSpending.spentMoney, newSpending.categorie);

        try {
            await cashDB.addSpending(userStore.userId, newSpending)
                .then(()=>{
                    spendingStore.addSpending(createdOperation);
                    categoriesStore.updateSpandingInCategorie(newSpending);
                });
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }

    private createOperations(spending: number, categorie: string): ISpendingOperation {
        const operation = {
            spending  : spending,
            categorie : categorie,
            date      : new Date(),
        };

        return operation;
    }
}


export const spendingService = new SpendingService();
