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

class Auth {
    async registration(user: IFormAuth, switchStatus: () => void) {
        try {
            await createUserWithEmailAndPassword(AUTH, user.email, user.password)
                .then((data) => {
                    const sctructureUserDB = {
                        id   : data.user.uid,
                        info : { ...user },
                        ...structureCashUser,
                    };

                    data.user.getIdTokenResult()
                        .then((data) => localStorage.setItem('token', data.token))
                        .catch((err) => {
                            throw new Error(err);
                        });

                    this.writeUser(data.user.uid, sctructureUserDB, switchStatus,user);
                });

        }
        catch (err) {
            throw new Error('Что то пошло не так');
        }
    }

    private async writeUser(uid: string, infoUser: any, switchStatus:()=> void, user:IFormAuth) {
        try {
            await set(ref(db, 'users/' + uid), infoUser)
                .then(() => {
                    userStore.setUser(user, uid);
                    switchStatus();
                });
        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }

    async login(email: string, password: string, switchStatus: () => void) {
        await signInWithEmailAndPassword(AUTH, email, password)
            .then((data) => {
                this.getUserWithDB(data.user.uid);
                switchStatus();
            })
            .catch((error) => {
                throw new Error(error.message);
            });
    }

    private async getUserWithDB(userId: string) {
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


export const auth = new Auth();
