import { ISpendingOperation, ISpendingStore } from '../interfaces';
import { SpendingStore } from './SpendingStore';
import { balanceStore } from '../balanceStore/BalanceStore';


describe('Class SpendingStore',() => {

    const spendingOperations : ISpendingOperation = {
        spending  : 100,
        categorie : 'Медицина',
        date      : new Date().toDateString(),
    };

    const spending = 100;

    let spendingStore : ISpendingStore | null;

    beforeEach(() => {
        spendingStore  = new SpendingStore();
    });

    describe('Method addSpending', () => {


        test('Should increase length after add operation', () => {

            spendingStore!.addSpending(spendingOperations);

            expect(spendingStore!.spendingOperations).toHaveLength(1);

        });


        test('Should call method balanceStore', () => {

            const mockUpdateCashAccountSpy = jest.spyOn(balanceStore, 'updateCashAccount');

            spendingStore!.addSpending(spendingOperations);

            expect(mockUpdateCashAccountSpy).toHaveBeenCalledTimes(1);

            spendingStore!.addSpending(spendingOperations);

            expect(mockUpdateCashAccountSpy).toHaveBeenCalledTimes(2);

        });

        test('Should add spending operations and update spending', () => {

            spendingStore!.addSpending(spendingOperations);

            expect(spendingStore!.spendingOperations[spendingStore!.spendingOperations.length - 1]).toEqual(spendingOperations);
            expect(spendingStore!.spending).toEqual(100);


        });
    });

    describe('Method setSpending', () => {

        test('Should set spending and operations from mongo', () => {

               spendingStore!.setSpendingFromDB(spending,[spendingOperations]);
               expect(spendingStore!.spendingOperations).toContainEqual(spendingOperations);
               expect(spendingStore!.spending).toEqual(100);
               expect(spendingStore!.spending).not.toEqual(99);
               expect(spendingStore!.spending).not.toEqual(101);

        });

        test('Should has of equals length array', () => {

              spendingStore!.setSpendingFromDB(spending,[spendingOperations]);
              expect(spendingStore!.spendingOperations).toHaveLength(1);
              expect(spendingStore!.spendingOperations).not.toHaveLength(0);
              expect(spendingStore!.spendingOperations).not.toHaveLength(2);

        });
    });

    afterEach(() => {
        jest.clearAllMocks();
        spendingStore = null;
    });
});
