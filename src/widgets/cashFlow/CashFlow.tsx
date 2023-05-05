import React from 'react';
import { CashFlowList } from './cashFlowList/CashFlowList';


const CashFlow = () => {


    return (
        <aside
            className=" bg-card flex-initial text-black  rounded-2xl shadow-black shadow-md h-80 w-full flex flex-col  overflow-hidden  px-2
      md:h-80"
        >
            <h2 className="text-center text-black text-xl font-semibold">Последние операции</h2>
            <CashFlowList/>
        </aside>
    );
};

export default CashFlow;
