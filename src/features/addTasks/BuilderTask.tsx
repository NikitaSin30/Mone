import { useForm } from 'react-hook-form';
import { ITaskForm , IInputTask } from './interfaces/interfaces';
import { todoService } from 'features/addTasks/service/todoService';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { Label } from 'widgets/inputs/label/Label';




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
                <Label error={errors.task} nameLabel='Введите задачу' />
                <Input register={register} caseType="text" labelTitle="task" />
                <Button isValid={isValid} title="Создать" />
            </form>
        </>
    );
};
