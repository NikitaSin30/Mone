import { IncomeIcon } from 'pages/main/assets/IncomeIcon';
import ModalIncome from 'features/add-income/ModalIncome';
import { observer } from 'mobx-react-lite';
import { CardItem } from '../CardItem/CardItem';
import { ETitleCard } from 'shared/enums/enums';
import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { useToggle } from 'shared/hooks/useToggle/useToggle';



const { incomeCard } = ETitleCard;

export const IncomeCard = observer(() => {

    const { value: isModalActive, toggle: switchModalActive } = useToggle(false);
    const { income } = incomeStore;

    return (
        <>
            <CardItem switchShowModal={switchModalActive} title={incomeCard} money={income} iconCard={IncomeIcon} />
            <ModalIncome isModalActive={isModalActive} switchShowModal={switchModalActive} />
        </>
    );
});
