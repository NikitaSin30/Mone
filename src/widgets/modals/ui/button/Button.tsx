import { IButtonModal } from './interfaces/interfaces';

export const Button = (props:IButtonModal) => {
    const { isValid,title } = props;
    const hoverStyle = isValid && 'hover:text-green-600';

    return (
        <>
            <button disabled={!isValid} className={`text-center text-white border-solid border-2
             border-white rounded-md shadow-lg px-2  ${hoverStyle}`} type="submit">
                {title}
            </button>
        </>
    );
};
