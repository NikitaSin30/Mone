import { IIncomeOperation } from '../../shared/store/cashFlowStore/interfaces';
import { IFormSpending } from '../../features/add-spending/interfaces';
import { IFormAuth } from '../../features/auth/interfaces';

export interface ICashFlowApi {
    addIncome:(userId: string, incomeOperation: IIncomeOperation) => Promise<void>;
    addAccumulation:(userId: string, accumulation: number) => Promise<void>;
    addSpending:(userId: string, spending: IFormSpending) => Promise<void>
}

export interface IAuthApi {
    registration:(user: IFormAuth) => Promise<IFormAuth>;
    login:(loginData: IFormAuth) => Promise<void>

}
