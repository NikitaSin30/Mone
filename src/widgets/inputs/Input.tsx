import { IInput } from './intrfaces';
import { Label } from './label/Label';
import { createValidation } from './validation/fabricValadation';



export const Input = ({ register,titleRegister,titleLabel = 'Сумма', caseType,errMessage }:IInput) => {

    const validation = createValidation(caseType);

    return (
        <>
            <Label titleLabel={titleLabel} errMessage={errMessage}/>
            <input
                className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                type={validation?.type}
                {...register(titleRegister, validation?.validation )}
            />
        </>
    );
};
