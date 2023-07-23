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
                className="flex-1 relative  cursor-pointer bg-white
                         text-black font-semibold rounded-md shadow-lg  mb-3"
            >
                <div {...register(titleRegister, validation?.validation)} className='shadow-lg px-2 py-1 h-8'>{selected}</div>
                <SelectList style={style} getValueSelect={getValueSelect}/>
            </div>
        </>
    );
};
