import React from 'react';
import AccountingCards from '../../widgets/accountingСards/AccountingCards';
import { Context } from 'shared/context/context';
import { Navigate } from 'react-router';
import { GlobalContext } from 'shared/context/context';
import CashFlow from 'widgets/cashFlow/CashFlow';
import animation from '../../shared/ui/animation/animation.json';
import Lottie from 'lottie-react';
function Main(): React.ReactElement {
    const context = React.useContext<GlobalContext>(Context);


    return context.isLogin ? (
        <>
            <article className=" relative flex gap-2  flex-col flex-1 w-6/6">
                <div className="absolute right-0 w-1/4 bottom-0">
                    <Lottie animationData={animation} autoplay width={200} height={200} />
                </div>
                <AccountingCards></AccountingCards>
                <CashFlow />
            </article>
        </>
    ) : (
        <Navigate to="/login" />
    );
}

export default Main;
