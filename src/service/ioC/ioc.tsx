import { AuthService } from 'service/auth/serviceAuth';
import { CategorieService } from 'service/categorie/categorieService';
import TodoService from 'service/todo/todoService';
import { CategoriesAPI } from 'api/CategoriesApi';
import { AuthAPI } from 'api/AuthApi';
import { TodoAPI } from 'api/todoApi';
import { IncomeService } from 'service/income/incomeService';
import { IncomeAPI } from 'api/IncomeApi';
import { SpendingService } from 'service/spending/serviceSpending';
import { SpendingAPI } from 'api/SpendingApi';
import { AccumulationService } from 'service/accumulation/AccumulationService';
import { AccumulationAPI } from 'api/AccumulationApi';
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
