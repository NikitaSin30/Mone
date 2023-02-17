import { IInput } from './intrfaces/interfaces';

// import { VALIDATION_STRING, VALIDATION_NUMBER } from './validation/constansValidation';
import { createValatation } from './validation/fabricValadation';

export const Input = (props:IInput) => {
    const { register, labelTitle, caseType }  = props;

    // const isTypeInputText = type === 'text';

    // const validation = isTypeInputText ? VALIDATION_STRING : VALIDATION_NUMBER;

    const validation = createValatation(caseType);

    return (
        <>
            <input
                className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                type={validation?.type}
                {...register(labelTitle, validation?.valadation )}
            />
        </>
    );
};
