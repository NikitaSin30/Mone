import React from 'react';
import { observer } from 'mobx-react-lite';
import { BuilderTask } from 'features/addTasks/BuilderTask';
import { TasksList } from 'widgets/todo/todoList/TasksList';
import ErrorModal from 'widgets/modals/ErrorModal';
import { ETitleModalErr } from 'shared/enums/enums';
import { TodoHeader } from '../../../widgets/todo/TodoHeader';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { IContextNotebook } from '../context/interfaces';
import { ContextNotebook } from '../context/context';



const ToDo = observer(()=>{
    const { value: isModalErrActiveTask, toggle: switchisModalErrActiveTask } = useToggle(false);
    const [ errMessage, setErrorMessage ] = React.useState('');

    const setErromFromDB = (errorMessage:string) => {
        setErrorMessage(errorMessage);
    };

    const context : IContextNotebook = {
        isModalErrActiveTask,
        switchisModalErrActiveTask,
    };


    return (
        <>
            <ContextNotebook.Provider value={context}>
                <div className=" flex flex-1 flex-col px-3 text-black bg-card   rounded-md w-full shadow-lg">
                    <div className="flex-1 flex flex-col h-full w-full ">
                        <h2 className="flex self-center mb-2 text-lg font-semibold">Список дел</h2>
                        <TodoHeader />
                        <TasksList />
                        <BuilderTask setErromFromDB={setErromFromDB}/>
                    </div>
                    {isModalErrActiveTask && <ErrorModal title={errMessage} switchShowModalErr={switchisModalErrActiveTask} />}
                </div>
            </ContextNotebook.Provider>
        </>
    );
});


export default ToDo;
