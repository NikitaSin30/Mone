import { IncomeStore } from './IncomeStore';
import { IIncomeOperation, IIncomeStore } from '../interfaces';
import { balanceStore } from '../BalanceStore';

describe('class IncomeStore', ()=>{

    const incomeOperation: IIncomeOperation  = {
        income : 100,
        sphere : 'IT',
        date   : new Date(),
    };
    const income = 100;

    let incomeStore : IIncomeStore | null;

    beforeEach(() => {
        incomeStore = new IncomeStore();
    });


    describe('Method addIncome', () => {

        test('Should add new operation and update income' , () => {

        incomeStore!.addIncome(incomeOperation);
        expect(incomeStore!.incomeOperations).toContainEqual(incomeOperation);
        expect(incomeStore!.income).toEqual(100);
        expect(incomeStore!.income).not.toEqual(101);
        expect(incomeStore!.income).not.toEqual(99);

        });

        test('Should call method from balanceStore', () => {

            const mockupdateCashAccount = jest.spyOn(balanceStore, 'updateCashAccount');

            incomeStore!.addIncome(incomeOperation);
            expect(mockupdateCashAccount).toHaveBeenCalledTimes(1);
            expect(mockupdateCashAccount).not.toHaveBeenCalledTimes(0);
            expect(mockupdateCashAccount).not.toHaveBeenCalledTimes(2);


        });

        test('Should increase length array after add', () => {

            incomeStore!.addIncome(incomeOperation);
            expect(incomeStore!.incomeOperations).toHaveLength(1);
            expect(incomeStore!.incomeOperations).not.toHaveLength(0);
            expect(incomeStore!.incomeOperations).not.toHaveLength(2);

        });

    });

    describe('Method setIncome', () => {
        test('Should set income and operations from mongo', () => {

        incomeStore!.setIncome(income, [incomeOperation]);

        expect(incomeStore!.income).toEqual(100);
        expect(incomeStore!.income).not.toEqual(99);
        expect(incomeStore!.income).not.toEqual(101);

        expect(incomeStore!.incomeOperations).toContainEqual(incomeOperation);
        });

        test('Should increase length array after set', () => {

            incomeStore!.setIncome(income,[incomeOperation]);
            expect(incomeStore!.incomeOperations).toHaveLength(1);
            expect(incomeStore!.incomeOperations).not.toHaveLength(0);
            expect(incomeStore!.incomeOperations).not.toHaveLength(2);

        });

    });

    afterEach(() => {
        incomeStore = null;
        jest.clearAllMocks();
    });
});
