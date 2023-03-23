import { useForm } from 'react-hook-form';
import { ITaskForm , IInputTask } from './interfaces/interfaces';
import { serviceTodo } from 'features/addTasks/service/serviceTodo';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';



export const BuilderTask = (props:IInputTask) =>{
    const { switchShowModalErr } = props;
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<ITaskForm>({ mode: 'onBlur' });


    function onAddTask({ task }: ITaskForm) {
        try {
            serviceTodo.middlewareAddTask(task, switchShowModalErr);
        }
        catch (error) {
            console.log('Ошибка');
        }
        finally {
            reset();
        }

    }


    return (
        <>
            <div className="flex justify-between w-full mt-4">{errors?.task && <span className="text-red-700">{errors?.task?.message || 'Errors'}</span>}</div>
            <form className="flex  w-full" onSubmit={handleSubmit(onAddTask)}>
                <Input register={register} caseType="text" labelTitle="task" />
                <Button isValid={isValid} title="Создать" />
            </form>
        </>
    );
};
