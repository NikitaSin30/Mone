import { AccumulationStore } from './AccumulationStore';
import { IAccumulationOperation } from '../interfaces';
import { IAccumulationStore } from '../interfaces/interfaces';
import { balanceStore } from '../BalanceStore';


describe('class AccumulationStore', () => {
    const accumulationOperation : IAccumulationOperation = {
        accumulation : 100,
        date         : new Date(),
    };
    const accumulation = 100;

    let accumulationStore : IAccumulationStore | null;

    beforeEach(() => {
        accumulationStore = new AccumulationStore();
    });
    describe('Method addAccumulation',() =>{

        test('Should add operation and accumulation', () => {

            accumulationStore!.addAccumulation(accumulationOperation);
            expect(accumulationStore!.accumulation).toEqual(100);
            expect(accumulationStore!.accumulation).not.toEqual(101);
            expect(accumulationStore!.accumulation).not.toEqual(99);

            expect(accumulationStore!.accumulationOperations).toContainEqual(accumulationOperation);
        });

        test('Should increase length after add', () => {

            accumulationStore!.addAccumulation(accumulationOperation);
            expect(accumulationStore!.accumulationOperations).toHaveLength(1);
            expect(accumulationStore!.accumulationOperations).not.toHaveLength(0);
            expect(accumulationStore!.accumulationOperations).not.toHaveLength(2);

        });

        test('Should call method balance store', () => {
            const spy = jest.spyOn(balanceStore, 'updateCashAccount');

             accumulationStore!.addAccumulation(accumulationOperation);
             expect(spy).toBeCalledTimes(1);
             expect(spy).not.toBeCalledTimes(0);
             expect(spy).not.toBeCalledTimes(2);

        });
    });

    describe('Method setAccumulation',() =>{

        test('Should set acumulutanion and operatins from mongo' , () =>{
         accumulationStore!.setAccumulation(accumulation, [accumulationOperation]);
         expect(accumulationStore!.accumulation).toEqual(100);
         expect(accumulationStore!.accumulation).not.toEqual(101);
         expect(accumulationStore!.accumulation).not.toEqual(99);

         expect(accumulationStore!.accumulationOperations).toContainEqual(accumulationOperation);
        });

        test('Should has of equal length', () =>{
            accumulationStore!.setAccumulation(accumulation,[accumulationOperation]);
            expect(accumulationStore!.accumulationOperations).toHaveLength(1);
            expect(accumulationStore!.accumulationOperations).not.toHaveLength(0);
            expect(accumulationStore!.accumulationOperations).not.toHaveLength(2);

        });
    });

    afterEach(() => {
        accumulationStore = null;
    });
});
