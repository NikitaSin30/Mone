import { IInput } from './intrfaces/interfaces';
import { VALIDATION_STRING, VALIDATION_NUMBER } from './validation/validation';


export const Input = (props:IInput) => {

    const { register, labelTitle, type }  = props;

    const isTypeInputText = type === 'text';
    const validation = isTypeInputText ? VALIDATION_STRING : VALIDATION_NUMBER;


    return (
        <>
            <input
                className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                type={type}
                {...register(labelTitle, validation )}
            />
        </>
    );
};
