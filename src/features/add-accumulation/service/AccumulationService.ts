import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { cashFlowApi } from 'api/CashFlowApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IAccumulationOperation } from 'shared/store/cashFlowStore/interfaces';
import { IAccumulationService } from './interfaces';
import { IFormAccumulation } from '../interfaces';



class AccumulationService implements IAccumulationService {

    async addAccumulation({ accumulation }: IFormAccumulation) {
        if (balanceStore.moneyAccount < accumulation) throw new Error('У вас нет данной суммы на счёте ');
        const createdOperation : IAccumulationOperation = this.createOperation(accumulation);

        await cashFlowApi.addAccumulation(userStore.idUser, createdOperation);

        accumulationStore.addAccumulation(createdOperation);

    }
    createOperation(accumulation : number) {
        return {
            accumulation : accumulation,
            date         : new Date(),
        };
    }
}

export const accumulationService = new AccumulationService();
