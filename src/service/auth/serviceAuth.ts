import { userStore } from '../../shared/store/userStore/UserStore';
import { IDataFromDB, IDataResponse, IFormAuth } from 'interfaces';
import { IAuthService } from './interfaces';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { incomeStore } from 'shared/store/cashFlowStore/incomeStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/spendingStore/SpendingStore';
import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { IAuthAPI } from 'api/interfaces';
import { IDataUserFromDB } from 'interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';



export class AuthService implements IAuthService {
    private authAPI: IAuthAPI;

    constructor(authAPI:IAuthAPI) {
        this.authAPI = authAPI;
    }

    async login(dataLogin:IFormAuth) {

        const { data } = await this.authAPI.login<IDataResponse<IDataFromDB>>(dataLogin);

        this.setDataFromDB(data.user);
        window.localStorage.setItem('wallet' , JSON.stringify(data.token));
        userStore.setIsAuth(true);

    }

    async registration(user: IFormAuth) {
        return await this.authAPI.registration(user);
    }

    async authenticate() {

        const tokenStorage = this.getToken();
        const { data } = await this.authAPI.authenticate<IDataResponse<IDataFromDB>>(tokenStorage);

        this.setDataFromDB(data.user);

        window.localStorage.setItem('wallet', JSON.stringify( data.token ));

        userStore.setIsAuth(true);

    }

    async logout() {

        await this.authAPI.logout(userStore.userID);

        localStorage.removeItem('wallet');
        userStore.setIsAuth(false);
        
    }

    private getToken():string {
        const token = JSON.parse(localStorage.getItem('wallet')!);

        if (!token) {
            throw new Error('Вам необходимо войти заново. Приносим свои извенения');
        }

        return token;
    };

    private setDataFromDB(userData: IDataUserFromDB) {
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
