import { Link } from 'react-router-dom';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { observer } from 'mobx-react-lite';
import { todoService } from 'features/addTasks/service/todoService';
import React from 'react';
import { IContextNotebook } from 'pages/noteBook/context/interfaces';
import { ContextNotebook } from 'pages/noteBook/context/context';


export const TodoHeader = observer(() => {
    const { switchisModalErrActiveTask,setErromFromDB } = React.useContext<IContextNotebook>(ContextNotebook);

    const { tasks } = toDoStore;
    const isHasTask = tasks.length > 0;

    const onDeleteAllTasks = async() => {
        try {
            await todoService.deleteAllTasks();
        }
        catch (error) {
            if (error instanceof Error) {
                setErromFromDB(error.message);
                switchisModalErrActiveTask();
            }
        }
    };

    return (
        <div className="flex justify-between items-center">
            <Link
                to="/notebook/shoplist"
                className="text-orange-800 font-semibold text-sm
                border-solid border-slate-900 border-2 py-1 px-2 rounded-lg mb-2 hover:text-green-600 hover:bg-slate-800"
            >
          ShopList
            </Link>
            {isHasTask && (
                <button
                    onClick={onDeleteAllTasks}
                    className=" text-orange-800 font-semibold text-sm
                border-solid border-slate-900 border-2 py-1 px-2 rounded-lg mb-2 hover:text-red-600 hover:bg-slate-800"
                >
            Очистить список
                </button>
            )}
        </div>
    );
});
