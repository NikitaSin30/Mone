import { IButtonModal } from './interfaces/interfaces';

export const Button = (props:IButtonModal) => {
    const { isValid,title } = props;
    const hoverStyle = isValid && 'hover:scale-110';

    return (
        <>
            <button disabled={!isValid} className={`text-center ${hoverStyle}`} type="submit">
                {title}
            </button>
        </>
    );
};
