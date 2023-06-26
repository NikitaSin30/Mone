import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IFormAccumulation } from 'interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { IAccumulationAPI } from 'api/interfaces';
import { AbstractOperationService } from 'service/abstractClasses/AbstractOperationService';
import { IAccumulationOperation } from 'interfaces';
import { EOperationType } from 'enum';



export class AccumulationService extends AbstractOperationService {
    private accumulutionAPI:IAccumulationAPI;

    constructor(accumulutionAPI:IAccumulationAPI) {
        super();
        this.accumulutionAPI = accumulutionAPI;
    }

    async add( data : IFormAccumulation) {
        if (balanceStore.moneyAccount < data.accumulation) throw new Error('У вас нет данной суммы на счёте ');

        const createdOperation = this.createOperation(data);

        await this.accumulutionAPI.add(userStore.userID, createdOperation);

        accumulationStore.addAccumulation(createdOperation);
        operationsStore.addOperation(createdOperation);
    }

    createOperation({ accumulation } : IFormAccumulation):IAccumulationOperation {
        return {
            accumulation,
            date : new Date().toLocaleDateString(),
            type : EOperationType.Accumulation,
        };
    }
}
