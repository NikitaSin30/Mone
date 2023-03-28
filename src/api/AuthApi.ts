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
             if(!response.ok) {
                throw new Error()
             }
             console.log(response);

            const result = await response.json()

            return result
        }
        catch (err) {
            console.log(err);
            throw new Error('Что то пошло не так');
        }
    }


    async login(dataLogin:IFormAuth) {
        try {
            const response = await fetch("http://localhost:3002/auth/login", {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(dataLogin)
            })
             if(!response.ok) {
                throw new Error()
             }
            const res = await response.json()
            return res
        } catch (error) {
         throw new Error();


        }
    }

     async getUser(userId: string) {
        try {
            const userRef = ref(db, 'users/' + userId);

            onValue(userRef, (snapshot) => {
                const data = snapshot.val();

                userStore.setUser(data.info);
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
