import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';
import { IFormSpending } from 'features/add-spending/interfaces/interfaces';
import { ref, child, push, update } from 'firebase/database';
import { db } from 'shared/firebase/firebase';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';

// type UpdateFunction = (data: Partial<Record<string, any>>, onComplete?: (error: Error | null) => void) => Promise<void>;

class CashDB {
    async addIncome(userId: string, incomeOperation: IIncomeOperation) {
        try {
            const newIncomeKey = push(child(ref(db), 'income')).key;
            const updates: any = {};

            updates['users/' + userId + '/cash/income/operation/' + newIncomeKey] = incomeOperation;
            updates['users/' + userId + '/cash/income/allIncome'] = incomeOperation.income + incomeStore.income;
            updates['users/' + userId + '/cash/balance'] = balanceStore.moneyAccount + incomeOperation.income;

            update(ref(db), updates);
        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }

    async addAccumulation(userId: string, accumulation: number) {
        try {
            const newIncomeKey = push(child(ref(db), 'accumulation')).key;
            const updates: any = {};

            updates['users/' + userId + '/cash/accumulation/operation/' + newIncomeKey] = accumulation;
            updates['users/' + userId + '/cash/accumulation/allAccumulation'] = accumulation + accumulationStore.accumulation;
            updates['users/' + userId + '/cash/balance'] = balanceStore.moneyAccount - accumulation;

            update(ref(db), updates);
        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }

    async addSpending(userId: string, spending: IFormSpending) {
        try {
            const newIncomeKey = push(child(ref(db), 'spending')).key;
            const updates: any = {};

            updates['users/' + userId + '/cash/spending/operation/' + newIncomeKey] = spending;
            updates['users/' + userId + '/cash/spending/allSpending'] = spending.spentMoney + spendingStore.spending;
            updates['users/' + userId + '/cash/balance'] = balanceStore.moneyAccount - spending.spentMoney;

            update(ref(db), updates);
        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }
}


export const cashDB = new CashDB();
