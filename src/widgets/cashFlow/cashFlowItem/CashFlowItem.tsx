import { DeleteIcon } from 'widgets/todo/assets/DeleteIcon';
import { ICashFlowItem } from './interfaces';

export const CashFlowItem = ({ operation }:ICashFlowItem) => {

    return (
        <li className="flex-none h-100% flex px-4 py-2 text-white bg-slate-900  items-center
                          justify-between rounded-md shadow-lg">
            {('accumulation' in operation) && (
                <>
                    <span className='w-1/3'>Отложено: {operation.accumulation}</span>
                    <span className='w-1/3'></span>
                    <span className='w-1/3'>Дата: {operation.date}</span>
                </>
            )}
            {('spending' in operation) && (
                <>
                    <span className='w-1/3'>Потрачено: {operation.spending}</span>
                    <span className='w-1/3'>Категория: {operation.categorie}</span>
                    <span className='w-1/3'>Дата: {operation.date}</span>
                </>
            )}
            {('income' in operation) && (
                <>
                    <span className='w-1/3'>Доход: {operation.income}</span>
                    <span className='w-1/3'>Сфера: {operation.sphere}</span>
                    <span className='w-1/3'>Дата: {operation.date}</span>
                </>
            )}
            <button className="hover:scale-110">
                {DeleteIcon}
            </button>
        </li>
    );
};
