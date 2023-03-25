import { ILabel } from './interfaces/interfaces';
import { FieldError } from 'react-hook-form';



export const Label = <T extends FieldError>({ error, nameLabel = 'Сумма' }:ILabel<T> ) => {
    return (
        <div className="flex justify-between">
            <span>{nameLabel} </span> {error && <span className="text-red-700">{error?.message || 'Errors'}</span>}
        </div>
    );
};
