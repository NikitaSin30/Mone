import { authAPI } from 'api/AuthApi';
import { IFormAuth } from '../interfaces/interfaces';
import { userStore } from '../../../shared/store/userStore/UserStore';
import { IAuthService } from './IAuthService';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { spendingService } from 'features/add-spending/service/serviceSpending';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';



class AuthService implements IAuthService {
    async login(dataLogin:IFormAuth , switchUI: () => void) {
        try {
           const res = await authAPI.login(dataLogin);
        //    тут надо метод чтобы цеплять текст ui ?
           const user : IFormAuth = {
            email : res.user.email,
            country : res.user.country,
            nickname : res.user.nickname,
            password : res.user.password,
            _id : res.user._id
           }
           console.log(res.user.balance);

           userStore.setUser(user)
           incomeStore.setIncome(res.user.income, res.user.incomeOperations)
           accumulationStore.setAccumulation(res.user.accumulation, res.user.accumulationOperations)
           spendingStore.setSpending(res.user.spending, res.user.spendingOperations)
           balanceStore.setBalance(res.user.balance)
           switchUI();

        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error();
            }

        }
    }
    async registration(user: IFormAuth, switchUI: () => void) {
        try {
            const response = await authAPI.registration(user)


         userStore.setUser(response);
         switchUI();

        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}


export const authService = new AuthService();
