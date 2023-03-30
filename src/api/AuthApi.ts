import { db } from 'shared/firebase/firebase';
import { ref, set, onValue } from 'firebase/database';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { userStore } from 'shared/store/userStore/UserStore';
import { IFormAuth } from 'features/auth/interfaces/interfaces';
import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { structureCashUser } from './structureBD';
import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { AUTH } from './constans';
import { IAuthApi } from './interfaces/interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';
import { ICategorie } from 'shared/store/categoriesStore/interfaces/interfaces';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';




class AuthApi implements IAuthApi{
    async registration(user: IFormAuth) {
        try {
            const response =  await createUserWithEmailAndPassword(AUTH, user.email, user.password);
            const token = await response.user.getIdTokenResult();

            localStorage.setItem('token', token.token );
            const sctructureUserDB = {
                id   : response.user.uid,
                info : { ...user },
                ...structureCashUser,
            };

            await set(ref(db, 'users/' + response.user.uid), sctructureUserDB);
            return response.user.uid

        }
        catch (err) {
            throw new Error('Что то пошло не так');
        }
    }



    async login(email: string, password: string) {
        try {
            const response =  await signInWithEmailAndPassword(AUTH, email, password);
            await this.getUser(response.user.uid);

        }
        catch (err) {
            throw new Error('Ошибка');
        }
    }

     async getUser(userId: string) {
        try {
            const userRef = ref(db, 'users/' + userId);

            onValue(userRef, (snapshot) => {
                const data = snapshot.val();

                userStore.setUser(data.info, userId);

                balanceStore.setBalanceWithDB(data.cash.balance);

                const operationIncome:IIncomeOperation[] = []
                for (let key in data.cash.income.operation) {
                  operationIncome.push(data.task[key]);
                }
                incomeStore.setIncomeWithStore(data.cash.income.allIncome,operationIncome);

                const operationSpending: ISpendingOperation[] = [];
                for (let key in data.cash.spending.operation) {
                  operationSpending.push(data.task[key]);
                }
                spendingStore.setSpendingWithDB(data.cash.spending.allSpending,operationSpending);


                 const operationAccumulation: IAccumulationOperation[] = [];
                 for (let key in data.cash.accumulation.operation) {
                   operationAccumulation.push(data.task[key]);
                 }
                accumulationStore.setAccumulationWithDB(data.cash.accumulation.allAccumulation, operationAccumulation);

                const tasks: ITask[] = [];
                for (let key in data.task) {
                  tasks.push(data.task[key]);
                }
                toDoStore.setTasksWithdDB(tasks);

                const categories:ICategorie[] = []
                 for (let key in data.categories) {
                   categories.push(data.categories[key]);
                 }
                 categoriesStore.setCategoriesWithDB(categories)
            });
        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }
}


export const authAPI = new AuthApi();
