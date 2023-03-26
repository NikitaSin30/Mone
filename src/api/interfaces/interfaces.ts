import { IIncomeOperation } from '../../shared/store/cashFlowStore/interfaces/interfaces';
import { IFormSpending } from '../../features/add-spending/interfaces/interfaces';
import {IFormAuth} from "../../features/auth/interfaces/interfaces";

export interface ICashFlowApi {
    addIncome:(userId: string, incomeOperation: IIncomeOperation) => Promise<void>;
    addAccumulation:(userId: string, accumulation: number) => Promise<void>;
    addSpending:(userId: string, spending: IFormSpending) => Promise<void>
}

export interface IAuthApi {
    registration:(user: IFormAuth, switchStatus: () => void) => Promise<void>;
    login:(loginData: IFormAuth, switchStatus: () => void) => Promise<void>

}
