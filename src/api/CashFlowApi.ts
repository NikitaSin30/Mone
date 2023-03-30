import { IAccumulationOperation, IIncomeOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';
import { IFormSpending } from 'features/add-spending/interfaces/interfaces';
import { ref, child, push, update } from 'firebase/database';
import { db } from 'shared/firebase/firebase';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { ICashFlowApi } from './interfaces/interfaces';

// type UpdateFunction = (data: Partial<Record<string, any>>, onComplete?: (error: Error | null) => void) => Promise<void>;



class CashFlowApi implements ICashFlowApi {

    async addIncome(userId: string, income:number , sphere: string) {
        try {
            const newIncomeKey = push(child(ref(db), 'income')).key;
             const incomeItem = {
                 sphere: sphere,
                  income: income,
                 date : new Date(),
                 key: newIncomeKey,

             };
            const updates: any = {};

            updates['users/' + userId + '/cash/income/operation/' + newIncomeKey] = incomeItem;
            updates['users/' + userId + '/cash/income/allIncome'] = incomeItem.income + incomeStore.income;
            updates['users/' + userId + '/cash/balance'] = balanceStore.moneyAccount + incomeItem.income;

            await update(ref(db), updates);
            return incomeItem;
        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }

    async addAccumulation(userId: string, accumulation: number) {
        try {
            const newAccumulationKey = push(child(ref(db), 'accumulation')).key;
            const accumulationItem: IAccumulationOperation = {
              accumulation: accumulation,
              date: new Date(),
              key: newAccumulationKey,
            };
            const updates: any = {};

            updates['users/' + userId + '/cash/accumulation/operation/' + newAccumulationKey] = accumulationItem;
            updates['users/' + userId + '/cash/accumulation/allAccumulation'] = accumulation + accumulationStore.accumulation;
            updates['users/' + userId + '/cash/balance'] = balanceStore.moneyAccount - accumulation;

            await update(ref(db), updates);
            return accumulationItem
        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }

    async addSpending(userId: string, spending: number , categorie:string) {
        try {
            const newSpendingKey = push(child(ref(db), 'spending')).key;
            const spendingItem = {
              spending: spending,
              categorie:categorie,
              date: new Date(),
              key: newSpendingKey,
            };

            const updates: any = {};

            updates['users/' + userId + '/cash/spending/operation/' + newSpendingKey] = spendingItem;
            updates['users/' + userId + '/cash/spending/allSpending'] = spending + spendingStore.spending;
            updates['users/' + userId + '/cash/balance'] = balanceStore.moneyAccount - spending;

            await update(ref(db), updates);

            return spendingItem;
        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }
}


export const cashFlowApi = new CashFlowApi();
