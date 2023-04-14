import { authAPI } from 'api/AuthApi';
import { userStore } from '../../../shared/store/userStore/UserStore';
import { IFormAuth } from '../interfaces';
import { IAuthService, IDataUserFromDB } from './interfaces';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';



class AuthService implements IAuthService {
    async login(dataLogin:IFormAuth , switchUI: () => void) {
        try {
            const res = await authAPI.login(dataLogin);

            this.setDataFromDB(res.user);
            switchUI();
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    setDataFromDB(userData: IDataUserFromDB) {
        const user : IFormAuth = {
            email    : userData.email,
            country  : userData.country,
            nickname : userData.nickname,
            password : userData.password,
            _id      : userData._id,
        };


        userStore.setUserFromDB(user);
        incomeStore.setIncomeFromDB(userData.income, userData.incomeOperations);
        accumulationStore.setAccumulationFromDB(userData.accumulation, userData.accumulationOperations);
        spendingStore.setSpendingFromDB(userData.spending, userData.spendingOperations);
        balanceStore.setBalanceFromDB(userData.balance);
    }
    
    async registration(user: IFormAuth) {
        try {
            const { message } = await authAPI.registration(user);

            console.log(message);

        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }
}


export const authService = new AuthService();
