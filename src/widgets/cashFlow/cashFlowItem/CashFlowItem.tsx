import { DeleteModal } from 'widgets/modals/DeleteModal';
import { ICashFlowItem } from './interfaces';
import React from 'react';
import { DeleteButton } from 'features/delete/DeleteButton';
import { Context, IGlobalContext } from 'shared/context/context';


export const CashFlowItem = ({ operation,onSuccessDelete }:ICashFlowItem) => {

    const {
        isShowDeleteModal,
        switchIsShowDeleteModal,
    } = React.useContext<IGlobalContext>(Context);


    return (
        <>
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
                <DeleteButton switchIsShowDeleteModal={switchIsShowDeleteModal}/>
            </li>

            {isShowDeleteModal && <DeleteModal id={operation.id}
                title={'Данную операцию'} onSuccesDelete={onSuccessDelete} switchShowModal={switchIsShowDeleteModal} />}
        </>
    );
};
