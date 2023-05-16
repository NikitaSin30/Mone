import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IAccumulationService } from './interfaces';
import { IFormAccumulation } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { IAccumulationApi } from 'api/accumulationApi/interfaces';
import { IFactoryOperation } from 'shared/service/factory/interfaces';
import { OPERATION_ACCUMULATION } from 'shared/service/factory/constants';


class AccumulationService implements IAccumulationService {


    constructor(private accumulutionApi:IAccumulationApi, private factoryOperation:IFactoryOperation) {
        this.accumulutionApi = accumulutionApi;
        this.factoryOperation = factoryOperation;
    }

    async addAccumulation( { accumulation } : IFormAccumulation) {
        if (balanceStore.moneyAccount < accumulation) throw new Error('У вас нет данной суммы на счёте ');
        const createdOperation  = this.factoryOperation.createOperation(OPERATION_ACCUMULATION,accumulation);

        try {
            const { accumulationOperationWithID } =  await this.accumulutionApi.addAccumulation(userStore.user._id, createdOperation);

            accumulationStore.addAccumulation(accumulationOperationWithID);
            operationsStore.addOperation(accumulationOperationWithID);

        }
        catch (error) {
            throw error;
        }
    }
}

export default AccumulationService;
