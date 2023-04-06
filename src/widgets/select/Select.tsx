import { createValidation } from 'widgets/inputs/validation/fabricValadation';
import { ISelect } from './interfaces';
import { SelectList } from './SelectList/SelectList';


export const Select = (props:ISelect) => {
    const { isActiveSelect, getValueSelect, toggleActiveSelect, register, selected, titleRegister,caseType } = props;

    const style = isActiveSelect ? 'block' : 'hidden';
    const validation = createValidation(caseType);


    return (
        <>
            <div
                onClick={toggleActiveSelect}
                className="flex-1 cursor-pointer bg-white h-8
                         text-black font-semibold rounded-md shadow-lg py-1"
            >
                <div {...register(titleRegister, validation?.validation)}>{selected}</div>
                <SelectList style={style} getValueSelect={getValueSelect}/>
            </div>
        </>
    );
};
