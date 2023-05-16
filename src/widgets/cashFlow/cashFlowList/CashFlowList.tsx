import React from 'react';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { observer } from 'mobx-react-lite';
import { CashFlowItem } from '../cashFlowItem/CashFlowItem';
import { ioContainer } from 'api/IoC/ioc';
import { Context, IGlobalContext } from 'shared/context/context';
import ErrorModal from 'widgets/modals/ErrorModal';


export const CashFlowList = observer(() => {

    const { switchIsErrorModal,
        isShowErrorModal,
        messageError,
        switchIsShowDeleteModal,
        setMessageError } = React.useContext<IGlobalContext>(Context);

    const { allOperations } =  operationsStore;

    const onSuccessDeleteOperation = async(id:string) =>{
        try {
            await ioContainer.operationService.deleteOperation(id);
            switchIsShowDeleteModal();
        }
        catch (error) {
            if (error instanceof Error) {
                switchIsShowDeleteModal();
                setMessageError(error.message);
                switchIsErrorModal();
            }
        }
    };

    return (
        <>
            <ul className='flex flex-col gap-1'>
                { allOperations?.slice(-3).reverse().map((operation) => {
                    return <CashFlowItem operation={operation} onSuccessDelete={onSuccessDeleteOperation} key={operation.id}/>;
                })}
            </ul>
            {isShowErrorModal && <ErrorModal title={messageError} switchShowModalErr={switchIsErrorModal}/>}

        </>
    );
});
