import React from 'react';
import AccountingCards from '../../widgets/accountingСards/AccountingCards';
import { Context } from 'shared/context/context';
import { Navigate } from 'react-router';
import { GlobalContext } from 'shared/context/context';
import CashFlow from 'widgets/cashFlow/CashFlow';
import Notebook from 'widgets/notebook/Notebook';

function Main(): React.ReactElement {
    const context = React.useContext<GlobalContext>(Context);


    return context.isLogin ? (
        <>
            <article className=" flex gap-2  flex-col flex-1 w-6/6">
                <AccountingCards></AccountingCards>
                <section className="flex-1 flex flex-col gap-2 md:gap-3 sm:flex-row-reverse ">
                    <CashFlow />
                    <Notebook />
                </section>
            </article>
        </>
    ) : (
        <Navigate to="/login" />
    );
}

export default Main;
