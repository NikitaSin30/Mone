import CashFlow from 'widgets/cashFlow/CashFlow';
import { IncomeCard } from 'widgets/accountingСards/incomeCard/IncomeCard';
import { SpendingCard } from 'widgets/accountingСards/spendingCard/SpendingCard';
import { AccumulationCard } from 'widgets/accountingСards/accumulationCard/AccumulationCard';
import { BalanceCard } from 'widgets/accountingСards/balanceCard/BalanceCard';
import { AnalysisGraphs } from 'widgets/analysisGraphs/AnalysisGraphs';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { ContextMain } from './context/context';
import { IContextMain } from './context/interfaces/interfaces';



const Main = () => {
    const { value: isModalActiveIncome, toggle: switchIsModalActiveIncome } = useToggle(false);
    const { value: isModalActiveSpending, toggle: switchIsModalActiveSpending } = useToggle(false);
    const { value: isModalActiveAccumulation, toggle: switchisModalActiveAccumulation } = useToggle(false);
    const { value: isModalErrActiveAccumulation, toggle: switchisModalErrActiveAccumulation } = useToggle(false);


    const context:IContextMain = {
        isModalActiveIncome,
        switchIsModalActiveIncome,
        isModalActiveSpending,
        switchIsModalActiveSpending,
        isModalActiveAccumulation,
        switchisModalActiveAccumulation,
        isModalErrActiveAccumulation,
        switchisModalErrActiveAccumulation,
    };

    return (
        <> <ContextMain.Provider value={context}>
            <section className="flex flex-col flex-1 gap-3 ">
                <div className="flex flex-1  gap-3 w-full flex-col content-start
                    sm:flex-row sm:justify-center sm:flex-wrap   ">
                    <BalanceCard />
                    <IncomeCard />
                    <SpendingCard />
                    <AccumulationCard />
                </div>
                <div className="flex-1 w-full flex flex-col gap-3 md:flex-row">
                    <AnalysisGraphs />
                    <CashFlow />
                </div>
            </section>
        </ContextMain.Provider>
        </>
    );
};

export default Main;
