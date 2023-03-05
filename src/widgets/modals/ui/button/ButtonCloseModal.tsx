import { IButtonCloseModal } from './interfaces/interfaces';
import { CloseIcon } from 'widgets/modals/assets/CloseIcon';


export const ButtonCloseModal = (props: IButtonCloseModal) => {
    const { onChangeActive } = props;

    return (
        <>
            <button onClick={onChangeActive} className="rounded-full w-6 h-6 overflow-hidden hover:scale-110">
                {CloseIcon}
            </button>
        </>
    );
};
