import { IBalanceStore } from '../interfaces';
import { BalanceStore } from './BalanceStore';



describe('class BalanceStore',() => {

    const balance = 1000;

    let balanceStore : IBalanceStore | null;

    beforeEach(() => {
        balanceStore = new BalanceStore();
    });

    describe('Method updateCashAccount', () => {

        test('Shoul update balance', () =>{

            balanceStore!.updateCashAccount(balance);
            expect(balanceStore!.moneyAccount).toEqual(1000);
            expect(balanceStore!.moneyAccount).not.toEqual(1001);
            expect(balanceStore!.moneyAccount).not.toEqual(999);
        });
    });

    describe('Method setBalance', () => {

        test('Should set balance from mongo', () => {

            balanceStore!.setBalance(balance);
            expect(balanceStore!.moneyAccount).toEqual(1000);
            expect(balanceStore!.moneyAccount).not.toEqual(1001);
            expect(balanceStore!.moneyAccount).not.toEqual(999);
        });
    });

    afterEach(() => {
        balanceStore = null;
    });
});
