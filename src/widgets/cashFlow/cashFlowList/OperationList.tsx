import React from 'react';
import { operationsStore } from 'shared/store/cashFlowStore/operationsStore/OperationsStore';
import { observer } from 'mobx-react-lite';
import { Context, IGlobalContext } from 'shared/context/context';
import ErrorModal from 'widgets/modals/ErrorModal';
import { OperationItem } from '../cashFlowItem/OperationItem';
import { mediatorOperations } from 'service/mediator';


export const OperationList = observer(() => {

    const { switchIsErrorModal,
        isShowErrorModal,
        messageError,
        switchIsShowDeleteModal,
        setMessageError } = React.useContext<IGlobalContext>(Context);

    const { allOperations } =  operationsStore;

    const onSuccessDeleteOperation = async(id:string) =>{
        try {

            await mediatorOperations.delete(id);
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
                { allOperations?.slice(-3).reverse().map((operation,index) => {
                    return <OperationItem operation={operation} key={index} onSuccessDelete={onSuccessDeleteOperation}/>;
                })}
            </ul>
            {isShowErrorModal && <ErrorModal title={messageError} switchShowModalErr={switchIsErrorModal}/>}

        </>
    );
});
