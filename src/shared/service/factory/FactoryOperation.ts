import { IIncomeOperation } from '../../store/cashFlowStore/interfaces';
import { ISpendingOperation } from '../../store/cashFlowStore/interfaces';
import { IAccumulationOperation } from '../../store/cashFlowStore/interfaces';
import { EOperationType } from '../../store/cashFlowStore/interfaces';
import { TYPE_OPERATION_SPENDING,TYPE_OPERATION_ACCUMULATION,TYPE_OPERATION_INCOME } from './constants';


class IncomeOperation implements IIncomeOperation {
    date: string;
    income: number;
    sphere: string;
    type:EOperationType.Income;

    constructor(income:number, sphere:string ) {
        this.income = income;
        this.sphere = sphere;
        this.date   = new Date().toLocaleDateString();
        this.type = EOperationType.Income;
    }

}

class SpendingOperation implements ISpendingOperation {
    spending: number;
    categorie: string;
    date:string;
    type:EOperationType.Spending;

    constructor(spending:number, categorie : string ) {
        this.spending = spending;
        this.categorie = categorie;
        this.date   = new Date().toLocaleDateString();
        this.type = EOperationType.Spending;
    }
}

class AccumulationOperation implements IAccumulationOperation {
    accumulation: number;
    date:string;
    type:EOperationType.Accumulation;

    constructor(accumulation:number) {
        this.accumulation = accumulation;
        this.date   = new Date().toLocaleDateString();
        this.type = EOperationType.Accumulation;
    }
}


class FactoryOperation {

    createOperation(typeOperation:typeof TYPE_OPERATION_ACCUMULATION,accumulation:number):IAccumulationOperation
    createOperation(typeOperation:typeof TYPE_OPERATION_SPENDING,spending:number,categorie:string):ISpendingOperation
    createOperation(typeOperation:typeof TYPE_OPERATION_INCOME,income:number, sphere:string):IIncomeOperation
    createOperation(typeOperation:string,sum:number, classification?:string) {

        switch (typeOperation) {
            case TYPE_OPERATION_INCOME:
                return new IncomeOperation(sum,classification!);
            case TYPE_OPERATION_SPENDING:
                return new SpendingOperation(sum,classification!);
            case TYPE_OPERATION_ACCUMULATION:
                return new AccumulationOperation(sum);
            default:
                throw new Error('Приносим извинения. Произошла ошибка');
        }

    }

}

export default FactoryOperation;
