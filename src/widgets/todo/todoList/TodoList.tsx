import React from 'react';
import { observer } from 'mobx-react-lite';
import { TodoItem } from '../todoItem/TodoItem';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { IContextNotebook } from 'pages/noteBook/context/interfaces';
import { ContextNotebook } from 'pages/noteBook/context/context';
import { services } from 'service/ioC/ioc';


export const TodoList = observer(() => {
    const { switchisModalErrActiveTask,setErromFromDB } = React.useContext<IContextNotebook>(ContextNotebook);

    const { tasks } = toDoStore;

    const onDeleteTask = React.useCallback(async(idTask:string) => {
        try {
            await services.todo.delete(idTask);
        }
        catch (error) {
            if (error instanceof Error) {
                setErromFromDB(error.message);
                switchisModalErrActiveTask();
            }
        }
    },[setErromFromDB, switchisModalErrActiveTask]);

    const onToggleIsDoneTask = React.useCallback(async(id:string) =>{
        try {
            await services.todo.switchIsDoneTask(id);
        }
        catch (error) {
            if (error instanceof Error) {
                setErromFromDB(error.message);
                switchisModalErrActiveTask();
            }
        }
    },[setErromFromDB, switchisModalErrActiveTask]);


    return (
        <div className="flex flex-1 flex-col h-full gap-2">
            {tasks?.map(({ id,task,isDone }) => {
                return <TodoItem
                    key={id}
                    task={task}
                    isDone={isDone}
                    id={id}
                    onDeleteTask={onDeleteTask}
                    onToggleIsDoneTask={onToggleIsDoneTask} />;
            })}
        </div>
    );
});
