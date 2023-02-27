import { AddIcon } from 'pages/main/assets/assets';
import { ICardItem } from '../interfaces/interfaces';



export const CardItem = (props:ICardItem) => {

    const { title, moneyCard, onChangeActive, children } = props;

    const isAddIcon = title !== 'На счёте' ? <AddIcon/> : null;


    return (
        <div
            className=" h-[200px] py-2 px-4 flex flex-col  overflow-hidden  bg-card rounded-2xl shadow-black shadow-md
        sm:w-[400px] md:w-[370px] lg:w-[450px] xl:w-[560px] 2xl:w-[610px]
        hover:shadow-none"
        >
            <div className="flex gap-2 items-center justify-between">
                <h2 className="text-slate-900 font-semibold text-xl">{title}</h2>
                {children}
            </div>
            <div className="text-white flex items-center  font-bold text-4xl h-full">{moneyCard}</div>
            <button onClick={onChangeActive} className="hover:scale-110 self-end">
                {isAddIcon}
            </button>
        </div>
    );
};
