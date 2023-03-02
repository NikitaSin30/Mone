import React from 'react';
import { observer } from 'mobx-react-lite';
import { InputTask } from 'features/addTasks/InputTask';
import { ToDoStore } from 'shared/store/ToDoStore';
import { TodoList } from 'widgets/todo/todoList/TodoList';
import { Link } from 'react-router-dom';
import ErrorModal from 'widgets/modals/ErrorModal';
import Modal from 'widgets/modals/Modal';


export const ToDo = observer(()=>{
    const [isModalActive, setIsModalActive] = React.useState<boolean>(false);
    const [err, setErr] = React.useState<boolean>(false);
    const { tasks } = ToDoStore;
    const isHasTask = tasks.length > 0;



    function onChangeActive() {
        setIsModalActive((prev) => !prev);
    }
    function onChangeErr() {
        setErr((prev) => !prev);
    }


    const ContentModal = () => {
        return err ? (
            <ErrorModal onChangeActive={onChangeActive} onChangeErr={onChangeErr}>
                <h2 className="text-xl font-bold text-center">
              Категории должны быть уникальны <br /> Попробуйте ещё раз
                </h2>
            </ErrorModal>
        ) : null;
    };

    return (
        <div className=" flex flex-1 flex-col px-3 text-black bg-card   rounded-md w-full shadow-lg">
            <div className="flex-1 flex flex-col h-full w-full ">
                <h2 className="flex self-center mb-2 text-lg font-semibold">Список дел</h2>
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
                            onClick={() => ToDoStore.removeAllTasks()}
                            className=" text-orange-800 font-semibold text-sm
                border-solid border-slate-900 border-2 py-1 px-2 rounded-lg mb-2 hover:text-red-900 hover:bg-slate-800"
                        >
                Очистить список
                        </button>
                    )}
                </div>
                <TodoList/>
                <InputTask isActive={isModalActive} onChangeErr={onChangeErr} onChangeIsModalActive={onChangeActive}></InputTask>
            </div>
            <Modal isActive={isModalActive} onChangeActive={onChangeActive}>
                <ContentModal />
            </Modal>
        </div>
    );
});
