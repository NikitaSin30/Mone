import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IAccumulationService } from './interfaces';
import { IFormAccumulation } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { IAccumulationApi } from 'api/AccumulationApi';
import { IFactoryOperation } from 'shared/service/factory/interfaces';
import { TYPE_OPERATION_ACCUMULATION } from 'shared/service/factory/constants';


class AccumulationService implements IAccumulationService {


    constructor(private accumulutionApi:IAccumulationApi, private factoryOperation:IFactoryOperation) {
        this.accumulutionApi = accumulutionApi;
        this.factoryOperation = factoryOperation;
    }

    async addAccumulation( { accumulation } : IFormAccumulation) {
        if (balanceStore.moneyAccount < accumulation) throw new Error('У вас нет данной суммы на счёте ');
        const createdOperation  = this.factoryOperation.createOperation(TYPE_OPERATION_ACCUMULATION,accumulation);

        await this.accumulutionApi.addAccumulation(userStore.idUser, createdOperation);

        accumulationStore.addAccumulation(createdOperation);
        operationsStore.addOperation(createdOperation);
    }
}

export default AccumulationService;
