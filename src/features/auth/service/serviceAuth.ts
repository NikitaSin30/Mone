import { authAPI } from 'api/AuthApi';
import { userStore } from '../../../shared/store/userStore/UserStore';
import { IFormAuth } from '../interfaces';
import { IAuthService } from './interfaces';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IDataUserFromDB } from 'api/interfaces';
import { getToken } from './helpers/getToken';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';



class AuthService implements IAuthService {

    async login(dataLogin:IFormAuth) {
        try {
            const { user,token } = await authAPI.login(dataLogin);

            this.setDataFromDB(user);
            window.localStorage.setItem('wallet' , JSON.stringify(token));
            userStore.setIsAuth(true);

        }
        catch (error) {
            throw error;
        }
    }

    async registration(user: IFormAuth) {
        try {
            const response  = await authAPI.registration(user);

            return response;
        }
        catch (error) {
            throw error;
        }

    }

    async authenticate() {
        try {
            const tokenStorage = getToken();
            const { user,token } = await authAPI.authenticate(tokenStorage);

            this.setDataFromDB(user);

            window.localStorage.setItem('wallet', JSON.stringify( token ));

            userStore.setIsAuth(true);

        }
        catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            await authAPI.logout(userStore.idUser);

            localStorage.removeItem('wallet');
            userStore.setIsAuth(false);
        }
        catch (error) {
            throw error;
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
        toDoStore.setTasksFromdDB(userData.tasks);
        incomeStore.setIncomeFromDB(userData.income, userData.incomeOperations);
        accumulationStore.setAccumulationFromDB(userData.accumulation, userData.accumulationOperations);
        spendingStore.setSpendingFromDB(userData.spending, userData.spendingOperations);
        balanceStore.setBalanceFromDB(userData.balance);
        operationsStore.setAllOperationsFromDB(userData.allOperations);
        categoriesStore.setCategoriesFromDB(userData.categories);
    }
}


export const authService = new AuthService();
