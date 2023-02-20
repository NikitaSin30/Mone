import Income from 'features/add-income/Income';
import { observer } from 'mobx-react-lite';
import { CashFlowStore } from 'shared/store/CashFlowStore';

const AccoutingCards:React.FC = observer(() => {


    return (
        <section className="flex-1  gap-2 flex flex-col  md:gap-3 ">
            <section className="flex-1 flex">
                <div className="flex  flex-1 gap-2 flex-col  md:flex-row md:gap-3 ">
                    <div className="flex-1  min-h-[130px] relative  flex flex-col  px-2 bg-slate-900 rounded-md shadow-lg ">
                        <div className="flex  justify-between gap-2 items-center">
                            <h2 className="font-semibold text-lg">На счёте</h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-8 md:w-14 md:h-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0
                                     003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25
                                      2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                                />
                            </svg>
                        </div>
                        <p className="text-white font-bold flex-1">{CashFlowStore.moneyAccount}</p>

                        <form action="" className="flex pb-2 pr-2 flex-row-reverse right-0 justify-between items-center">
                            <input type="checkbox" className="bottom-2 right-5" />
                        </form>
                    </div>
                    <Income />
                    <div className="flex-1 flex flex-col overflow-hidden  px-2 bg-white rounded-md shadow-lg">
                        <div className="flex gap-2 items-center justify-between">
                            <h2 className="text-black font-semibold text-lg">Расход</h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="dark"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-8 md:w-14 md:h-12 "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983
                                     0 013.361-6.867 8.21 8.21 0 003 2.48z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                                />
                            </svg>
                        </div>
                        <p className="text-black font-bold">{CashFlowStore.spentMoney}</p>
                    </div>
                </div>
            </section>
            <aside className="flex min-h-[130px] justify-end flex-1">
                <div className="flex-1  bg-white  gap-2 w-full rounded-md shadow-lg  justify-between ">
                    <div className="flex items-center justify-between">
                        <h2 className="text-black font-semibold px-2 text-lg">Накоплено</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="dark" className="w-6 h-8 md:w-14 md:h-12 ">
                            <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                            <path
                                fillRule="evenodd"
                                d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112
                                9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75
                                0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75
                                 0 001.5 0v-6.75z"
                                clipRule="evenodd"
                            />
                            <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                        </svg>
                    </div>
                </div>
            </aside>
        </section>
    );
});

export default AccoutingCards;
