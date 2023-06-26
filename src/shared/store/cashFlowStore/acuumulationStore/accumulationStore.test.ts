import { AccumulationStore } from './AccumulationStore';
import { EOperationType } from 'enum';
import { IAccumulationStore } from '../interfaces';
import { balanceStore } from '../balanceStore/BalanceStore';
import { IAccumulationOperation } from 'interfaces';


describe('class AccumulationStore', () => {
    const accumulationOperation : IAccumulationOperation = {
        accumulation : 100,
        date         : new Date().toLocaleDateString(),
        type         : EOperationType.Accumulation,
    };
    const accumulation = 100;
    const spy = jest.spyOn(balanceStore, 'updateCashAccount');

    let accumulationStore : IAccumulationStore | null;

    beforeEach(() => {
        accumulationStore = new AccumulationStore();
    });

    afterEach(() => {
        accumulationStore = null;
        jest.clearAllMocks();
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

             accumulationStore!.addAccumulation(accumulationOperation);
             expect(spy).toBeCalledTimes(1);


        });
    });

    describe('Method setAccumulation',() =>{

        test('Should set acumulutanion and operatins from mongo' , () =>{
         accumulationStore!.setAccumulationFromDB(accumulation, [accumulationOperation]);
         expect(accumulationStore!.accumulation).toEqual(100);


         expect(accumulationStore!.accumulationOperations).toContainEqual(accumulationOperation);
        });

        test('Should has of equal length', () =>{
            accumulationStore!.setAccumulationFromDB(accumulation,[accumulationOperation]);
            expect(accumulationStore!.accumulationOperations).toHaveLength(1);


        });
    });


});
