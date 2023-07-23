import { balanceStore } from 'shared/store/cashFlowStore/balanceStore/BalanceStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IFormAccumulation, IDataResponse, IResponseAccumulationOperation } from 'interfaces';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { IAccumulationAPI } from 'api/interfaces';
import { AbstractOperationService } from 'service/abstractClasses/AbstractOperationService';
import { IAccumulationOperation } from 'interfaces';
import { EOperationType } from 'enum';
import { OPERATION_ACCUMULATION } from 'shared/constants';



export class AccumulationService extends AbstractOperationService {
    private accumulutionAPI:IAccumulationAPI;

    constructor(accumulutionAPI:IAccumulationAPI) {
        super();
        this.accumulutionAPI = accumulutionAPI;
    }

    async add( formAccumulation : IFormAccumulation) {
        if (balanceStore.moneyAccount < formAccumulation.accumulation) throw new Error('У вас нет данной суммы на счёте ');

        const createdOperation = this.createOperation(formAccumulation);

        const { data } =  await this.accumulutionAPI.add<IDataResponse<IResponseAccumulationOperation>>(userStore.userID, createdOperation);

        accumulationStore.addAccumulation(data);
        operationsStore.addOperation(data);
    }

    async delete(accumulationID:string) {
        const { data:deletedOperation } = await this.accumulutionAPI.delete<IDataResponse<IResponseAccumulationOperation>>(accumulationID,userStore.userID);

        accumulationStore.updateAfterDeleteOperation(deletedOperation.accumulation);
        balanceStore.updateAfterDeleteOperation(deletedOperation.accumulation,OPERATION_ACCUMULATION);
        accumulationStore.deleteOperation(accumulationID);
        operationsStore.deleteOperation(accumulationID);
    }

    createOperation({ accumulation } : IFormAccumulation):IAccumulationOperation {
        return {
            accumulation,
            type : EOperationType.Accumulation,
        };
    }
}
