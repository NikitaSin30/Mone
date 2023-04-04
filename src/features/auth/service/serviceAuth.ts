import { authAPI } from 'api/AuthApi';
import { IFormAuth } from '../interfaces/interfaces';
import { userStore } from '../../../shared/store/userStore/UserStore';
import { IAuthService } from './IAuthService';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { spendingService } from 'features/add-spending/service/serviceSpending';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { Navigate, redirect, useNavigate } from 'react-router';

// const navigate = useNavigate()

class AuthService implements IAuthService {
    async login(dataLogin:IFormAuth) {
        try {
           const res = await authAPI.login(dataLogin);
        //    тут надо метод чтобы цеплять текст ui ?

           window.localStorage.setItem('wallet' , JSON.stringify(res.token))

           const user : IFormAuth = {
            email : res.user.email,
            country : res.user.country,
            nickname : res.user.nickname,
            password : res.user.password,
            _id : res.user._id
           }
           console.log(res.user.balance);

           userStore.setUser(user)
           userStore.setIsAuth(true)
           incomeStore.setIncome(res.user.income, res.user.incomeOperations)
           accumulationStore.setAccumulation(res.user.accumulation, res.user.accumulationOperations)
           spendingStore.setSpending(res.user.spending, res.user.spendingOperations)
           balanceStore.setBalance(res.user.balance)

           userStore.setIsAuth(true)
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error();
            }

        }
    }
    async registration(user: IFormAuth) {


        try {
          await authAPI.registration(user)

        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
    async auth() {
        try {
            const res = await authAPI.auth()
            window.localStorage.setItem('wallet', JSON.stringify( res.token ));

            const user: IFormAuth = {
              email: res.user.email,
              country: res.user.country,
              nickname: res.user.nickname,
              password: res.user.password,
              _id: res.user._id,
            };
            userStore.setUser(user);
            // userStore.includeIsAuth()


            incomeStore.setIncome(res.user.income, res.user.incomeOperations);
            accumulationStore.setAccumulation(res.user.accumulation, res.user.accumulationOperations);
            spendingStore.setSpending(res.user.spending, res.user.spendingOperations);
            balanceStore.setBalance(res.user.balance);

        } catch (error) {
           console.log('gbplf');

        }
    }

    async logout(){
        try {
           const res = await authAPI.logout(userStore.user._id)
        //    ui
            localStorage.removeItem('wallet')
            userStore.setIsAuth(false)
        } catch (error) {
         console.log('Ошибочка');

        }
    }
}


export const authService = new AuthService();
