import { IncomeStore } from '../IncomeStore';
import { EOperationType, IIncomeOperation, IIncomeStore } from '../../interfaces';
import { balanceStore } from '../../balanceStore/BalanceStore';



describe('class IncomeStore', ()=>{

    const incomeOperation: IIncomeOperation  = {
        income : 100,
        sphere : 'IT',
        type   : EOperationType.Income,
        date   : new Date().toLocaleDateString(),
    };

    const income = 100;
    let incomeStore : IIncomeStore | null;

    const mockupdateCashAccountSpy = jest.spyOn(balanceStore, 'updateCashAccount');

    beforeEach(() => {
        incomeStore = new IncomeStore();
    });

    afterEach(() => {
        incomeStore = null;
        jest.clearAllMocks();
    });

    describe('Method addIncome', () => {

        test('Should add new operation and update income' , () => {

        incomeStore!.addIncome(incomeOperation);
        expect(incomeStore!.incomeOperations).toContainEqual(incomeOperation);
        expect(incomeStore!.income).toEqual(100);

        });

        test('Should call method from balanceStore', () => {


            incomeStore!.addIncome(incomeOperation);
            expect(mockupdateCashAccountSpy).toHaveBeenCalledTimes(1);

        });

        test('Should increase length array after add', () => {

            incomeStore!.addIncome(incomeOperation);
            expect(incomeStore!.incomeOperations).toHaveLength(1);

        });

    });

    describe('Method setIncome', () => {
        test('Should set income and operations from mongo', () => {

            incomeStore!.setIncomeFromDB(income, [incomeOperation]);

            expect(incomeStore!.income).toEqual(100);
            expect(incomeStore!.incomeOperations).toContainEqual(incomeOperation);
        });

        test('Should increase length array after set', () => {

            incomeStore!.setIncomeFromDB(income,[incomeOperation]);
            expect(incomeStore!.incomeOperations).toHaveLength(1);

        });

    });

});
