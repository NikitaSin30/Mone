import { useForm } from 'react-hook-form';
import { ITaskForm , IInputTask } from './interfaces/interfaces';
import { todoService } from 'features/addTasks/service/todoService';
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
            todoService.addTask(task, switchShowModalErr);
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
            <form className="flex flex-col  w-full" onSubmit={handleSubmit(onAddTask)}>
                <Input register={register} caseType="text" titleRegister="task" titleLabel='ВВедите задчу' errMessage={errors.task?.message} />
                <Button isValid={isValid} title="Создать" />
            </form>
        </>
    );
};
