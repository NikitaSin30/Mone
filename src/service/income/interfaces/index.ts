import { IFormIncome } from 'interfaces';
import { IIncomeOperation } from 'interfaces';



export interface IServiceIncome {
    add: (newIncome:IFormIncome) => Promise<void>;
    createOperation:(newIncome : IFormIncome) => IIncomeOperation
}
