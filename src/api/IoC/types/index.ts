import { IAccumulationService } from 'features/add-accumulation/service/interfaces';
import { ICategoriesService } from 'features/add-categories/service/interfaces';
import { IServiceIncome } from 'features/add-income/service/interfaces';
import { ISpendingService } from 'features/add-spending/service/interfaces';
import { ITodoService } from 'features/addTasks/service/interfaces';
import { IAuthService } from 'features/auth/service/interfaces';

export type TcreateIoContainerReturn = {
        auth : IAuthService,
        categories : ICategoriesService,
        todo : ITodoService,
        income : IServiceIncome,
        spending : ISpendingService,
        accumulation : IAccumulationService,
}
