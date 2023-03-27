import React from 'react';
import AccumulationModal from 'features/add-accumulation/AccumulationModal';
import ErrorModal from 'widgets/modals/ErrorModal';
import { AccumulationIcon } from 'pages/main/assets/AccumulationIcon';
import { observer } from 'mobx-react-lite';
import { CardItem } from '../CardItem/CardItem';
import { ETitleModalErr } from 'shared/enums/enums';
import { ETitleCard } from 'shared/enums/enums';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { IContextMain } from 'pages/main/context/interfaces/interfaces';
import { ContextMain } from 'pages/main/context/context';

const { accumulationCard } = ETitleCard;
const { accumulationErr } = ETitleModalErr;

export const AccumulationCard = observer(() => {
    const { isModalErrActiveAccumulation,switchisModalActiveAccumulation,switchisModalErrActiveAccumulation } = React.useContext<IContextMain>(ContextMain);
    const { accumulation } = accumulationStore;


    return (
        <>
            <CardItem title={accumulationCard} money={accumulation} iconCard={AccumulationIcon} switchShowModal={switchisModalActiveAccumulation} />
            <AccumulationModal/>
            {isModalErrActiveAccumulation && <ErrorModal title={accumulationErr} switchShowModalErr={switchisModalErrActiveAccumulation} />}
        </>
    );
});
