import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IFormAccumulation } from '../interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { IAccumulationAPI } from 'api/AccumulationApi';
import { TYPE_OPERATION_ACCUMULATION } from 'shared/service/factory/constants';
import { AbstractOperationService } from 'service/abstractClasses/AbstractOperationService';



export class AccumulationService extends AbstractOperationService {

    constructor(private accumulutionAPI:IAccumulationAPI) {
        super();
        this.accumulutionAPI = accumulutionAPI;
    }

    async add( { accumulation } : IFormAccumulation) {
        if (balanceStore.moneyAccount < accumulation) throw new Error('У вас нет данной суммы на счёте ');
        const createdOperation  = this.factoryOperation.createOperation(TYPE_OPERATION_ACCUMULATION,accumulation);

        await this.accumulutionAPI.add(userStore.userID, createdOperation);

        accumulationStore.addAccumulation(createdOperation);
        operationsStore.addOperation(createdOperation);
    }
}


