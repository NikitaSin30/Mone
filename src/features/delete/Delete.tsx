import { DeleteIcon } from 'widgets/todo/assets/DeleteIcon';
import { IDelete } from './interfaces';


export const Delete = ({ id,deleteMethod }:IDelete) => {
    return (
        <button onClick={()=>deleteMethod(id)} className="hover:scale-110">
            {DeleteIcon}
        </button>
    );
};
