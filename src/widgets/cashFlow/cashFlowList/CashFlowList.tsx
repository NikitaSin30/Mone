import React from 'react';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { observer } from 'mobx-react-lite';
import { CashFlowItem } from '../cashFlowItem/CashFlowItem';
import { ioContainer } from 'api/IoC/ioc';


export const CashFlowList = observer(() => {

    const { allOperations } =  operationsStore;

    const deleteOperation = async(id:string) =>{
        try {
            await ioContainer.operationService.deleteOperation(id);
        }
        catch (error) {

        }
    };

    return (
        <>
            <ul className='flex flex-col gap-1'>
                { allOperations?.slice(-3).reverse().map((operation) => {
                    return <CashFlowItem operation={operation} deleteOperation={deleteOperation} key={operation.id}/>;
                })}
            </ul>

        </>
    );
});
