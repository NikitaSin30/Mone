import { ILabel } from "./interfaces/interfaces";
import { FieldError } from 'react-hook-form';



export const Label =({errMessage,titleLabel = 'Сумма'}:ILabel) => {
    return (
        <div className="flex justify-between">
            <span>{titleLabel} </span> { <span className="text-red-700">{errMessage}</span>}
        </div>
    );
};
