import { IncomeStore } from './IncomeStore';
import { IIncomeOperation } from '../interfaces';


describe('incomeStore', ()=>{

    const incomeOperation: IIncomeOperation  = {
        income : 100,
        sphere : 'IT',
        date   : new Date(),
    };
    const income = 100;

    test('Should add new operation and update income' , () => {

        const incomeStore = new IncomeStore();

        incomeStore.addIncome(incomeOperation);

        expect(incomeStore.incomeOperations).toContainEqual(incomeOperation);
        expect(incomeStore.income).toEqual(incomeOperation.income);
    });

    test('Should set income and operations from mongo', () => {
        const incomeStore = new IncomeStore();

        incomeStore.setIncome(income, [incomeOperation]);

        expect(incomeStore.income).toEqual(100);
        expect(incomeStore.incomeOperations).toContainEqual(incomeOperation);
    });
});
