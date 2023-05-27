import { IOperationItem } from './interfaces';
import { ContentItem } from '../ContentItem/ContentItem';
import { EContentItem } from '../ContentItem/enums';
import { EOperationType } from 'shared/store/cashFlowStore/interfaces';



export const OperationItem:React.FC<IOperationItem> = ({ operation }) => {
    
    switch (operation.type) {
        case EOperationType.Income:
            return (
                <ContentItem
                    action={EContentItem.ActionIncome}
                    sum={operation.income}
                    date={operation.date}
                    subTitle={EContentItem.SubTitleIncome}
                    chapter={operation.sphere}
                />
            );

        case EOperationType.Spending:
            return (
                <ContentItem
                    action={EContentItem.ActionSpending}
                    sum={operation.spending}
                    date={operation.date}
                    subTitle={EContentItem.SubTitleSpending}
                    chapter={operation.categorie}
                />
            );

        case EOperationType.Accumulation:
            return (
                <ContentItem
                    action={EContentItem.ActionAccumulation}
                    sum={operation.accumulation}
                    date={operation.date}
                />
            );
        default:
            throw new Error('Произошла ошибка');
    }
};
