import { IAccumulationService } from 'service/accumulation/interfaces';
import { ICategoriesService } from 'service/categorie/interfaces';
import { IServiceIncome } from 'service/income/interfaces';
import { ISpendingService } from 'service/spending/interfaces';
import { ITodoService } from 'service/todo/interfaces';
import { IAuthService } from 'service/auth/interfaces';

export interface IIOContainer {
        auth : IAuthService,
        categories : ICategoriesService,
        todo : ITodoService,
        income : IServiceIncome,
        spending : ISpendingService,
        accumulation : IAccumulationService,
}
