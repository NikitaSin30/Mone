import { AuthService } from 'features/auth/service/serviceAuth';
import { CategoriesService } from 'features/add-categories/service/categoriesService';
import TodoService from 'features/addTasks/service/todoService';
import { CategoriesAPI } from 'api/CategoriesApi';
import { AuthAPI } from 'api/AuthApi';
import { TodoAPI } from 'api/todoApi';
import IncomeService from 'features/add-income/service/incomeService';
import { IncomeAPI } from 'api/IncomeApi';
import { SpendingService } from 'features/add-spending/service/serviceSpending';
import { SpendingAPI } from 'api/SpendingApi';
import { AccumulationService } from 'features/add-accumulation/service/AccumulationService';
import { AccumulationAPI } from 'api/AccumulationApi';
import { TcreateIoContainerReturn } from './types';



function createIoContainer():TcreateIoContainerReturn {
    return {
        auth         : new AuthService(new AuthAPI()),
        categories   : new CategoriesService(new CategoriesAPI()),
        todo         : new TodoService(new TodoAPI()),
        income       : new IncomeService(new IncomeAPI()),
        spending     : new SpendingService(new SpendingAPI()),
        accumulation : new AccumulationService(new AccumulationAPI()),
    };
}

export const services = createIoContainer();
