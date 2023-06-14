import { ILabel } from './interfaces';



export const Label:React.FC<ILabel> = ({ errMessage,titleLabel = 'Сумма' }) => {
    return (
        <div className="flex justify-between">
            <span>{titleLabel}</span> { errMessage && <span data-testid='span-error' className="text-red-700">{errMessage}</span>}
        </div>
    );
};
