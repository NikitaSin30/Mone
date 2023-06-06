import { ILabel } from './interfaces';



export const Label:React.FC<ILabel> = ({ errMessage,titleLabel = 'Сумма' }) => {
    return (
        <div className="flex justify-between">
            <span>{titleLabel} </span> { <span className="text-red-700">{errMessage}</span>}
        </div>
    );
};
