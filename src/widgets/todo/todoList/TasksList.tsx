import { observer } from 'mobx-react-lite';
import { ToDoItem } from '../todoItem/TodoItem';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';



export const TasksList = observer(() => {
    const { tasks } = toDoStore;

    return (
        <div className="flex flex-1 flex-col h-full gap-2">
            {tasks?.map((item) => {
                return <ToDoItem key={item.id} task={item.task} isDone={item.isDone} id={item.id}
                    onToggleStatus={() => toDoStore.toggleStatusByIdTask(item.id)} />;
            })}
        </div>
    );
});
