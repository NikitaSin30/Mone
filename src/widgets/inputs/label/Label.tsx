import { ILabel } from './interfaces/interfaces';
import { FieldError } from 'react-hook-form';



export const Label = <T extends FieldError>({ error }:ILabel<T> ) => {
    return (
        <div className="flex justify-between">
            <span>Cуммa </span> {error && <span className="text-red-700">{error?.message || 'Errors'}</span>}
        </div>
    );
};
