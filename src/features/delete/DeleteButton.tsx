import { DeleteIcon } from 'widgets/todo/assets/DeleteIcon';
import { IDeleteButton } from './interfaces';


export const DeleteButton = ({ switchIsShowDeleteModal }:IDeleteButton) => {
    return (
        <button onClick={switchIsShowDeleteModal} className="hover:scale-110">
            {DeleteIcon}
        </button>
    );
};
