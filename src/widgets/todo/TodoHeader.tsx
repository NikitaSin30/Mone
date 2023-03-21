import { Link } from 'react-router-dom';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';



export const TodoHeader = () => {
    const { tasks } = toDoStore;
    const isHasTask = tasks.length > 0;


    return (
        <div className="flex justify-between items-center">
            <Link
                to="/notebook/shoplist"
                className="text-orange-800 font-semibold text-sm
                border-solid border-slate-900 border-2 py-1 px-2 rounded-lg mb-2 hover:text-green-900 hover:bg-slate-800"
            >
          ShopList
            </Link>
            {isHasTask && (
                <button
                    onClick={() => toDoStore.removeAllTasks()}
                    className=" text-orange-800 font-semibold text-sm
                border-solid border-slate-900 border-2 py-1 px-2 rounded-lg mb-2 hover:text-red-900 hover:bg-slate-800"
                >
            Очистить список
                </button>
            )}
        </div>
    );
};
