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



class AuthApi implements IAuthApi {

    async registration(user: IFormAuth) {
        try {
            const response = await fetch("http://localhost:3002/auth/registration", {
                method: "POST",
                headers:  {
                    "Content-Type": "application/json"},
                body: JSON.stringify(user)
            })
            const result = await response.json()
        }
        catch (err) {
            console.log(err);
            throw new Error('Что то пошло не так');
        }
    }


    async login(dataLogin:IFormAuth, switchStatus: () => void) {
        try {
            const response = await fetch("http://localhost:3002/auth/login", {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(dataLogin)
            })
            const res = await response.json()
            console.log(res);
            // switchStatus()
            return res
        } catch (error) {
         console.log('ssss');

        }
        // try {
        //     const response =  await signInWithEmailAndPassword(AUTH, email, password);
        //     await this.getUser(response.user.uid);
        //     switchStatus();
        // }
        // catch (err) {
        //     throw new Error('Ошибка');
        // }
    }

     async getUser(userId: string) {
        try {
            const userRef = ref(db, 'users/' + userId);

            onValue(userRef, (snapshot) => {
                const data = snapshot.val();

                userStore.setUser(data.info, userId);
                balanceStore.getBalanceWithDB(data.cash.balance);
                incomeStore.getIncomeWithStore(data.cash.income.allIncome);
                spendingStore.getSpendingWithDB(data.cash.spending.allSpending);
                accumulationStore.getAccumulationWithDB(data.cash.accumulation.allAccumulation);
            });
        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }
}


export const authAPI = new AuthApi();
