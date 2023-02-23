import { SpendingCard } from './spendingCard/SpendingCard';
import Income from 'features/add-income/Income';
import { observer } from 'mobx-react-lite';
import { CashFlowStore } from 'shared/store/CashFlowStore';
import { WalletIcon } from 'pages/main/assets/assets';
import { AccumulationIcon } from 'pages/main/assets/assets';
const AccoutingCards:React.FC = observer(() => {


    return (
        <section className="flex-1  gap-2 flex flex-col  md:gap-3 ">
            <section className="flex-1 flex">
                <div className="flex  flex-1 gap-2 flex-col  md:flex-row md:gap-3 ">
                    <div className="flex-1  min-h-[130px] relative  flex flex-col  px-2 bg-slate-900 rounded-md shadow-lg ">
                        <div className="flex  justify-between gap-2 items-center">
                            <h2 className="font-semibold text-lg">На счёте</h2>
                            <WalletIcon/>
                        </div>
                        <p className="text-white font-bold flex-1">{CashFlowStore.moneyAccount}</p>

                        <form action="" className="flex pb-2 pr-2 flex-row-reverse right-0 justify-between items-center">
                            <input type="checkbox" className="bottom-2 right-5" />
                        </form>
                    </div>
                    <Income />
                    <SpendingCard />
                </div>
            </section>
            <aside className="flex min-h-[130px] justify-end flex-1">
                <div className="flex-1  bg-white  gap-2 w-full rounded-md shadow-lg  justify-between ">
                    <div className="flex items-center justify-between">
                        <h2 className="text-black font-semibold px-2 text-lg">Накоплено</h2>
                        <AccumulationIcon/>
                    </div>
                </div>
            </aside>
        </section>
    );
});

export default AccoutingCards;
