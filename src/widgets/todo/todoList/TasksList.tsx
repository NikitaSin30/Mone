import React from 'react';
import { observer } from 'mobx-react-lite';
import { ToDoItem } from '../todoItem/TodoItem';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { todoService } from 'features/addTasks/service/todoService';
import { IContextNotebook } from 'pages/noteBook/context/interfaces';
import { ContextNotebook } from 'pages/noteBook/context/context';



export const TasksList = observer(() => {
    const { switchisModalErrActiveTask,setErromFromDB } = React.useContext<IContextNotebook>(ContextNotebook);

    const { tasks } = toDoStore;


    const onDeleteTask = async(idTask:string) => {
        try {
            await todoService.deleteTask(idTask);
        }
        catch (error) {
            if (error instanceof Error) {
                if (error instanceof Error) {
                    setErromFromDB(error.message);
                    switchisModalErrActiveTask();
                }

            }
        }
    };


    return (
        <div className="flex flex-1 flex-col h-full gap-2">
            {tasks?.map(({ id,task,isDone }) => {
                return <ToDoItem
                    key={id}
                    task={task}
                    isDone={isDone}
                    id={id}
                    onDeleteTask={onDeleteTask} />;
            })}
        </div>
    );
});
