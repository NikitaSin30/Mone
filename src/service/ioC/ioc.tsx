import { AuthService } from 'service/auth/serviceAuth';
import { CategorieService } from 'service/categorie/categorieService';
import TodoService from 'service/todo/todoService';
import { CategoriesAPI } from 'api/categories';
import { AuthAPI } from 'api/auth';
import { TodoAPI } from 'api/todo';
import { IncomeService } from 'service/income/incomeService';
import { IncomeAPI } from 'api/income';
import { SpendingService } from 'service/spending/serviceSpending';
import { SpendingAPI } from 'api/spending';
import { AccumulationService } from 'service/accumulation/AccumulationService';
import { AccumulationAPI } from 'api/accumulation';
import { IIOContainer } from './interfaces';



function createIoContainer():IIOContainer {
    return {
        auth         : new AuthService(new AuthAPI()),
        categories   : new CategorieService(new CategoriesAPI()),
        todo         : new TodoService(new TodoAPI()),
        income       : new IncomeService(new IncomeAPI()),
        spending     : new SpendingService(new SpendingAPI()),
        accumulation : new AccumulationService(new AccumulationAPI()),
    };
}

export const services = createIoContainer();
