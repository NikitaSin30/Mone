import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { IAccumulationService } from './interfaces/interfaces';
import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';


class AccumulationService implements IAccumulationService {
    async addAccumulation(newAccumulation: number, showModalError: () => void, switchShowModal: () => void) {
        if (balanceStore.moneyAccount < newAccumulation) return showModalError();

        try {
            const res: IAccumulationOperation = await cashFlowApi.addAccumulation(userStore.userId, newAccumulation);
            accumulationStore.addAccumulation(res);
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
