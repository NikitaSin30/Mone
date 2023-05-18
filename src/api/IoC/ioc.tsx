import { IAuthService } from 'features/auth/service/interfaces';
import { ICategoriesService } from 'features/add-categories/service/interfaces';
import { ITodoService } from 'features/addTasks/service/interfaces';
import AuthService from 'features/auth/service/serviceAuth';
import CategoriesService from 'features/add-categories/service/categoriesService';
import TodoService from 'features/addTasks/service/todoService';
import CategoriesApi from 'api/categoriesApi/CategoriesApi';
import AuthApi from 'api/AuthApi';
import TodoApi from 'api/todoApi/todoApi';
import { IServiceIncome } from 'features/add-income/service/interfaces';
import { IAccumulationService } from 'features/add-accumulation/service/interfaces';
import { ISpendingService } from 'features/add-spending/service/interfaces';
import IncomeService from 'features/add-income/service/incomeService';
import IncomeApi from 'api/incomeApi/IncomeApi';
import FactoryOperation from 'shared/service/factory/FactoryOperation';
import SpendingService from 'features/add-spending/service/serviceSpending';
import SpendingApi from 'api/spendingApi/SpendingApi';
import AccumulationService from 'features/add-accumulation/service/AccumulationService';
import AccumulationApi from 'api/accumulationApi/AccumulationApi';
import { IIoContainer } from './interface';
import { IOperationSevice } from 'service/operationsService/interfaces';
import OperationsService from 'service/operationsService/OperationService';
import OperationsApi from 'api/operationsApi/OperationsApi';
import { StrategyUpdateStore } from 'service/operationsService/strategy/StrategyOperation';



class IoContainer implements IIoContainer {
    authService:IAuthService;
    categoriesService:ICategoriesService;
    todoService:ITodoService;
    incomeService:IServiceIncome;
    accumulationService:IAccumulationService;
    spendingService:ISpendingService;
    operationService:IOperationSevice;


    constructor() {
        this.authService = new AuthService(new AuthApi());
        this.categoriesService = new CategoriesService(new CategoriesApi());
        this.todoService = new TodoService(new TodoApi());
        this.incomeService = new IncomeService(new IncomeApi(), new FactoryOperation());
        this.spendingService = new SpendingService(new SpendingApi(), new FactoryOperation());
        this.accumulationService = new AccumulationService(new AccumulationApi(), new FactoryOperation());
        this.operationService = new OperationsService(new OperationsApi(),new StrategyUpdateStore());
    }
}


export const ioContainer = new IoContainer();
