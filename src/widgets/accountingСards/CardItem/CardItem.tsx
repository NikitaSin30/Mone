import { AddIcon } from 'pages/main/assets/AddIcon';
import { ICardItem } from '../interfaces/interfaces';



export const CardItem = (props: ICardItem) => {
    const { title, money, iconCard, switchShowModal } = props;
    const isOnBalance = title !== 'На счёте';
    const isAddIcon = isOnBalance ? AddIcon : null;

    return (
        <div
            className=" h-[200px] py-2 px-4 flex flex-col  overflow-hidden  bg-card rounded-2xl shadow-black shadow-md
        sm:w-[400px] md:w-[370px] lg:w-[450px] xl:w-[560px] 2xl:w-[610px]
        hover:shadow-none"
        >
            <div className="flex gap-2 items-center justify-between">
                <h2 className="text-slate-900 font-semibold text-xl">{title}</h2>
                {iconCard}
            </div>
            <div className="text-white flex items-center  font-bold text-4xl h-full">{money}</div>
            <button onClick={switchShowModal} className="hover:scale-110 self-end">
                {isAddIcon}
            </button>
        </div>
    );
};
