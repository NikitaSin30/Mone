import AccumulationModal from 'features/add-accumulation/AccumulationModal';
import ErrorModal from 'widgets/modals/ErrorModal';
import { AccumulationIcon } from 'pages/main/assets/AccumulationIcon';
import { observer } from 'mobx-react-lite';
import { CardItem } from '../CardItem/CardItem';
import { ETitleModalErr } from 'shared/enums/enums';
import { ETitleCard } from 'shared/enums/enums';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { useToggle } from 'shared/hooks/useToggle/useToggle';

const { accumulationCard } = ETitleCard;
const { accumulationErr } = ETitleModalErr;

export const AccumulationCard = observer(() => {
    const { value: isModalActive, toggle: switchisModalActive } = useToggle(false);
    const { value: isErrModalActive, toggle: switchShowModalErr } = useToggle(false);
    const { accumulation } = accumulationStore;


    return (
        <>
            <CardItem title={accumulationCard} money={accumulation} iconCard={AccumulationIcon} switchShowModal={switchisModalActive} />
            <AccumulationModal isModalActive={isModalActive} switchShowModal={switchisModalActive} switchShowModalErr={switchShowModalErr} />
            {isErrModalActive && <ErrorModal title={accumulationErr} switchShowModalErr={switchShowModalErr} />}
        </>
    );
});
