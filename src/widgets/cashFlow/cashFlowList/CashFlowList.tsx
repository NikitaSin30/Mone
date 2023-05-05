import React from 'react';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { observer } from 'mobx-react-lite';
import { CashFlowItem } from '../cashFlowItem/CashFlowItem';



export const CashFlowList = observer(() => {

    const { allOperations } =  operationsStore;

    return (
        <>
            <ul className='flex flex-col gap-1'>
                { allOperations?.slice(-3).reverse().map((operation,index) => {
                    return <CashFlowItem operation={operation} key={index}/>;
                })}
            </ul>

        </>
    );
});
