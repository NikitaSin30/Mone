import { IIncomeOperation } from 'features/add-income/service/interfaces';
import { ISpendingOperation } from 'features/add-spending/service/interfaces';
import { IAccumulationOperation } from 'features/add-accumulation/service/interfaces';
import { OPERATION_SPENDING,OPERATION_ACCUMULATION,OPERATION_INCOME } from './constants';




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

    createOperation(typeOperation:typeof OPERATION_ACCUMULATION,accumulation:number):IAccumulationOperation
    createOperation(typeOperation:typeof OPERATION_SPENDING,spending:number,categorie:string):ISpendingOperation
    createOperation(typeOperation:typeof OPERATION_INCOME,income:number, sphere:string):IIncomeOperation
    createOperation(typeOperation:string,summa:number, classification?:string) {

        switch (typeOperation) {
            case OPERATION_INCOME:
                return new IncomeOperation(summa,classification!);
            case OPERATION_SPENDING:
                return new SpendingOperation(summa,classification!);
            case OPERATION_ACCUMULATION:
                return new AccumulationOperation(summa);

        }

        throw new Error('Приносим извинения. Произошла ошибка');
    }

}

export default FactoryOperation;
