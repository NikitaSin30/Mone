import { IIncomeOperationWithID } from 'shared/store/cashFlowStore/incomeStore/interfaces';
import { IIncomeOperation } from 'features/add-income/service/interfaces';


export interface IResponseAddIncome {
    message:string,
    incomeOperationWithID:IIncomeOperationWithID
}

export interface IIncomeApi{
    addIncome:(incomeOperation: IIncomeOperation, id: string) => Promise<IResponseAddIncome>
}
