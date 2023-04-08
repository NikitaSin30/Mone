import { ISpendingOperation, ISpendingStore } from '../interfaces';
import { SpendingStore } from './SpendingStore';
import { balanceStore } from '../BalanceStore';


describe('Class SpendingStore',() => {

    const spendingOperations : ISpendingOperation = {
        spending  : 100,
        categorie : 'Медицина',
        date      : new Date(),
    };

    const spending = 100;

    let spendingStore : ISpendingStore | null;

    beforeEach(() => {
        spendingStore  = new SpendingStore();
    });

    describe('Method addSpending', () => {


        test('Should increase length after add operation', () => {

            expect(spendingStore!.spendingOperations).toHaveLength(0);
            spendingStore!.addSpending(spendingOperations);

            expect(spendingStore!.spendingOperations).toHaveLength(1);
        });


        test('Should call method balanceStore', () => {

            const mockUpdateCashAccount = jest.spyOn(balanceStore, 'updateCashAccount');

            spendingStore!.addSpending(spendingOperations);
            expect(mockUpdateCashAccount).toHaveBeenCalledTimes(1);


        });

        test('Should add spending operations and update spending', () => {

            spendingStore!.addSpending(spendingOperations);
            expect(spendingStore!.spendingOperations).toContainEqual(spendingOperations);
            expect(spendingStore!.spending).toEqual(100);
        });
    });

    describe('Method setSpending', () => {

        test('Should set spending and operations from mongo', () => {

               spendingStore!.setSpending(spending,[spendingOperations]);
               expect(spendingStore!.spendingOperations).toContainEqual(spendingOperations);
               expect(spendingStore!.spending).toEqual(spending);
        });

        test('Should has of equals length array', () => {

              spendingStore!.setSpending(spending,[spendingOperations]);
              expect(spendingStore!.spendingOperations).toHaveLength(1);
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
        spendingStore = null;
    });
});
