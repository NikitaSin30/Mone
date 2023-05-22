import React from 'react';
import AccumulationModal from 'features/add-accumulation/AccumulationModal';
import ErrorModal from 'widgets/modals/ErrorModal';
import { AccumulationIcon } from 'pages/main/assets/AccumulationIcon';
import { observer } from 'mobx-react-lite';
import { CardItem } from '../CardItem/CardItem';
import { ETitleCard } from 'shared/enums/enums';
import { accumulationStore } from 'shared/store/cashFlowStore/acuumulationStore/AccumulationStore';
import { IContextMain } from 'pages/main/context/interfaces';
import { ContextMain } from 'pages/main/context/context';

const { accumulationCard } = ETitleCard;


export const AccumulationCard = observer(() => {
    const [contentError,setContentError] = React.useState('');
    const { isModalErrActiveAccumulation,switchisModalActiveAccumulation,switchisModalErrActiveAccumulation } = React.useContext<IContextMain>(ContextMain);
    const { accumulation } = accumulationStore;




    const setTextError = (textError:string) => {
        setContentError(textError);
    };




    return (
        <>
            <CardItem title={accumulationCard} money={accumulation} iconCard={AccumulationIcon} switchShowModal={switchisModalActiveAccumulation} />
            <AccumulationModal setTextError={setTextError}/>
            {isModalErrActiveAccumulation && <ErrorModal title={contentError} switchShowModalErr={switchisModalErrActiveAccumulation} />}
        </>
    );
});
