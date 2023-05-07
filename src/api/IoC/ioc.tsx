import { IAuthService } from 'features/auth/service/interfaces';
import { ICategoriesService } from 'features/add-categories/service/interfaces';
import { ITodoService } from 'features/addTasks/service/interfaces';

import AuthService from 'features/auth/service/serviceAuth';
import CategoriesService from 'features/add-categories/service/categoriesService';
import TodoService from 'features/addTasks/service/todoService';
import CategoriesApi from 'api/CategoriesApi';
import AuthApi from 'api/AuthApi';
import TodoApi from 'api/todoApi';

interface IIoContainer {
    authService : IAuthService;
    categoriesService:ICategoriesService;
    todoService:ITodoService;
}

class IoContainer implements IIoContainer {
    authService:IAuthService;
    categoriesService:ICategoriesService;
    todoService:ITodoService;

    constructor() {
        this.authService = new AuthService(new AuthApi());
        this.categoriesService = new CategoriesService(new CategoriesApi());
        this.todoService = new TodoService(new TodoApi());
    }
}


export const ioContainer = new IoContainer();
