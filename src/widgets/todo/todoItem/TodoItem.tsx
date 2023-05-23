import { DeleteIcon } from 'widgets/todo/assets/DeleteIcon';
import { ITodoItem } from '../interfaces';




export const TodoItem = ( { task, isDone, id,onDeleteTask,onToggleIsDoneTask } :ITodoItem ) =>{

    const completed = isDone ? 'border-green-600' : 'border-red-900';

    return (
        <div className="flex  w-full justify-between items-center border-solid bg-slate-700 rounded-md py-2 px-2  border-2 border-orange-400">
            <h3 className="text-md font-bold px-2">
                {task} {isDone && <span className="text-green-600 font-extrabold underline mx-2">Выполнено</span>}
            </h3>
            <div className="flex gap-2">
                <button

                    onClick={() => onToggleIsDoneTask(id)}
                    className={`flex items-center justify-center w-6 h-6 border-solid rounded-full cursor-pointer
                border-4 ${completed}`}
                >
                    {isDone && <div className="bg-green-500 h-2 w-2 rounded-full"></div>}
                </button>
                <button className="cursor-pointer hover:scale-110" onClick={() => onDeleteTask(id)}>
                    {DeleteIcon}
                </button>
            </div>
        </div>
    );
};
