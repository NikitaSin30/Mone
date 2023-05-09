import { IIncomeOperationWithID } from '../../incomeStore/interfaces';
import { IAccumulationOperationWithID } from '../../acuumulationStore/interfaces';
import { ISpendingOperationWithID } from '../../spendingStore/interfaces';


export type TAllOperations = IAccumulationOperationWithID | ISpendingOperationWithID | IIncomeOperationWithID
