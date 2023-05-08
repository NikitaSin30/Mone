import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces';
import { ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';
import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';
import { TYPE_OPERATION_SPENDING,TYPE_OPERATION_ACCUMULATION,TYPE_OPERATION_INCOME } from './constants';


class IncomeOperation implements IIncomeOperation {
    income: number;
    sphere: string;
    date:string;

    constructor(income:number, sphere:string ) {
        this.income = income;
        this.sphere = sphere;
        this.date   = new Date().toLocaleDateString();
    }

}

class SpendingOperation implements ISpendingOperation {
    spending: number;
    categorie: string;
    date:string;
    constructor(spending:number, categorie : string ) {
        this.spending = spending;
        this.categorie = categorie;
        this.date   = new Date().toLocaleDateString();
    }
}

class AccumulationOperation implements IAccumulationOperation {
    accumulation: number;
    date:string;
    constructor(accumulation:number) {
        this.accumulation = accumulation;
        this.date   = new Date().toLocaleDateString();
    }
}


class FactoryOperation {

    createOperation(typeOperation:typeof TYPE_OPERATION_ACCUMULATION,accumulation:number):IAccumulationOperation
    createOperation(typeOperation:typeof TYPE_OPERATION_SPENDING,spending:number,categorie:string):ISpendingOperation
    createOperation(typeOperation:typeof TYPE_OPERATION_INCOME,income:number, sphere:string):IIncomeOperation
    createOperation(typeOperation:string,summa:number, classification?:string) {

        switch (typeOperation) {
            case TYPE_OPERATION_INCOME:
                return new IncomeOperation(summa,classification!);
            case TYPE_OPERATION_SPENDING:
                return new SpendingOperation(summa,classification!);
            case TYPE_OPERATION_ACCUMULATION:
                return new AccumulationOperation(summa);

        }

        throw new Error('Приносим извинения. Произошла ошибка');
    }

}

export default FactoryOperation;
