import { IOperation } from 'features/add-income/interfaces/interfaces';
import { IFormSpending } from 'features/add-spending/interfaces/interfaces';
import { ref, child, push, update } from 'firebase/database';
import { db } from 'shared/firebase/firebase';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';



class CashDB {
    async addIncome(userId: string, income: IOperation) {
        try {
            const newIncomeKey = push(child(ref(db), 'income')).key;
            const updates: any = {};

            updates['users/' + userId + '/cash/income/operation/' + newIncomeKey] = income;
            updates['users/' + userId + '/cash/income/allIncome'] = income.income + incomeStore.income;
            updates['users/' + userId + '/cash/balance'] = balanceStore.moneyAccount + income.income;

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
