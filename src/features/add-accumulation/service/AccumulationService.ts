import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { IAccumulationService } from './interfaces/interfaces';
import { IFormAccumulation } from '../interfaces/interfaces';


class AccumulationService implements IAccumulationService {
    async addAccumulation({accumulation}: IFormAccumulation, showModalError: () => void, switchShowModal: () => void) {
        if (balanceStore.moneyAccount < accumulation)
        return showModalError(),switchShowModal()

        try {
            await cashFlowApi.addAccumulation(userStore.userId, accumulation);
            accumulationStore.addAccumulation(accumulation);
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
