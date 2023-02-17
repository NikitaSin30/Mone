import { BsCheck , BsTrash } from 'react-icons/bs';
import { ToDoStore } from 'shared/store/ToDoStore';

interface ITodoItem {
    task:string,
    isDone:boolean,
    id:string
}

export const ToDoItem =  ( props:ITodoItem ) =>{
    const { task,isDone, id } = props;

    const copmleted = isDone ? 'border-green-600' : 'border-red-900';

    return (
        <div className="flex  w-full justify-between items-center border-solid bg-slate-700 rounded-md py-2 px-2  border-2 border-orange-400">
            <h2 className='text-md font-bold'>{task} {isDone && <span className='text-green-600 font-extrabold underline'>Выполнено</span>}</h2>

            <div className='flex gap-2'>
                <button
                    onClick={() => ToDoStore.onSwitchIsDone(id)}
                    className={`flex items-center justify-center w-6 h-6 border-solid rounded-full cursor-pointer
                border-4 ${copmleted}`}
                >
                    {isDone && <BsCheck size={26} className="text-green-600" />}
                </button>
                <button className="cursor-pointer" onClick={() => ToDoStore.removeTask(id)}>
                    <BsTrash size={22} className="text-white"/>
                </button>
            </div>
        </div>
    );
};
