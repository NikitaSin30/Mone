import { DeleteIcon } from 'widgets/todo/assets/DeleteIcon';
import { IOperationItem } from './interfaces';
import { ContentItem } from '../ContentItem/ContentItem';
import { EContentItem } from '../ContentItem/enums';




export const OperationItem:React.FC<IOperationItem> = ({ operation }) => {

    return (
        <li className="flex-none h-100% flex px-4 py-2 text-white bg-slate-900  items-center
                          justify-between rounded-md shadow-lg">
            {
                ('accumulation' in operation) && (
                    <ContentItem
                        action={EContentItem.ActionAccumulation}
                        sum={operation.accumulation}
                        date={operation.date}
                    />
                )}
            {('spending' in operation) && (
                <ContentItem
                    action={EContentItem.ActionSpending}
                    sum={operation.spending}
                    date={operation.date}
                    subTitle={EContentItem.SubTitleSpending}
                    chapter={operation.categorie}
                />
            )}
            {('income' in operation) && (
                <ContentItem
                    action={EContentItem.ActionIncome}
                    sum={operation.income}
                    date={operation.date}
                    subTitle={EContentItem.SubTitleIncome}
                    chapter={operation.sphere}
                />
            )}
            <div className="cursor-pointer hover:scale-110">
                {DeleteIcon}
            </div>
        </li>
    );
};
