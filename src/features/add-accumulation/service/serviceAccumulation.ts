import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { cashDB } from 'server/CashDB';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';



class ServiceAccumulation {
    
    async midlewareAddAccumulation(newAccumulation: number, showModalError: () => void, switchShowModal:() => void) {
        if (balanceStore.moneyAccount < newAccumulation) return showModalError();

        accumulationStore.addAccumulation(newAccumulation);

        try {
            await cashDB.addAccumulation(userStore.userId, newAccumulation);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }

        switchShowModal();
    }
}

export const serviceAccumulation = new ServiceAccumulation();
