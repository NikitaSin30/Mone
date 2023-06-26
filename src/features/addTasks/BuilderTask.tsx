import React from 'react';
import { useForm } from 'react-hook-form';
import { ITaskForm } from 'interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { IContextNotebook } from 'pages/noteBook/context/interfaces';
import { ContextNotebook } from 'pages/noteBook/context/context';
import { CASE_TYPE_TEXT_RUS } from 'widgets/inputs/validation/constans';
import { TITLE_REGISTOR_TASK } from 'widgets/inputs/validation/constans';
import { TITLE_LABEL_TASK } from 'widgets/inputs/label/constans';
import { TITLE_BUTTON_TASK } from 'widgets/modals/ui/button/constans';
import { services } from 'service/ioC/ioc';




export const BuilderTask = () =>{
    const { switchisModalErrActiveTask,setErromFromDB } = React.useContext<IContextNotebook>(ContextNotebook);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<ITaskForm>({ mode: 'onBlur' });


    const onAddTask = async(formData:ITaskForm) => {
        try {
            await services.todo.add(formData);

        }
        catch (error ) {
            if (error instanceof Error) {
                setErromFromDB(error.message);
                switchisModalErrActiveTask();
            }
            else {
                setErromFromDB('Произошла ошибка');
                switchisModalErrActiveTask();
            }

        }
        finally {
            reset();
        }
    };

    return (
        <>
            <form className="flex flex-col  w-full" onSubmit={handleSubmit(onAddTask)}>
                <Input
                    register={register}
                    caseType={CASE_TYPE_TEXT_RUS}
                    titleRegister={TITLE_REGISTOR_TASK}
                    titleLabel={TITLE_LABEL_TASK}
                    errMessage={errors.task?.message}
                />
                <Button isValid={isValid} title={TITLE_BUTTON_TASK} />
            </form>
        </>
    );
};
