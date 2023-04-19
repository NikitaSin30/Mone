import { authAPI } from 'api/AuthApi';
import { userStore } from '../../../shared/store/userStore/UserStore';
import { IFormAuth } from '../interfaces';
import { IAuthService } from './interfaces';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IDataFromDB, IDataUserFromDB } from 'api/interfaces';
import { getToken } from './helpers/getToken';



class AuthService implements IAuthService {

    async login(dataLogin:IFormAuth) {
        try {
            const { user,token, message } : IDataFromDB = await authAPI.login(dataLogin);

            this.setDataFromDB(user);

            window.localStorage.setItem('wallet' , JSON.stringify(token));

            return message ;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    async registration(user: IFormAuth) {
        try {
            const response = await authAPI.registration(user);

            console.log(response);

            return response;

        }
        catch (error) {
            if (error instanceof Error) {
                throw error;
            }
        }

    }

    async authenticate() {
        try {
            const tokenStorage = getToken();
            const { user,token } : IDataFromDB = await authAPI.authenticate(tokenStorage);

            this.setDataFromDB(user);

            window.localStorage.setItem('wallet', JSON.stringify( token ));
            userStore.setIsAuth(true);

        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    async logout() {
        try {
            const { message } = await authAPI.logout(userStore.user._id);

            console.log(message);

            localStorage.removeItem('wallet');
            userStore.setIsAuth(false);
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
        categoriesStore.setCategoriesFromDB(userData.categories);
    }
}


export const authService = new AuthService();
