import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { cashDB } from 'server/CashDB';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';



class AccumulationService {
    async AddAccumulation(newAccumulation: number, showModalError: () => void, switchShowModal: () => void) {
        if (balanceStore.moneyAccount < newAccumulation) return showModalError();

        try {
            await cashDB.addAccumulation(userStore.userId, newAccumulation)
                .then(()=>{
                    accumulationStore.addAccumulation(newAccumulation);
                });
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
        finally {
            switchShowModal();
        }
    }
}

export const accumulationService = new AccumulationService();
