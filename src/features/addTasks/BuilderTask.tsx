import React from 'react';
import { useForm } from 'react-hook-form';
import { ITaskForm } from './interfaces/interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { useService } from 'shared/hooks/useService/useService';
import { TASK } from 'shared/hooks/useService/constans/constans';
import { IContextNotebook } from 'pages/noteBook/context/interfaces/interfaces';
import { ContextNotebook } from 'pages/noteBook/context/context';
import { TEXT_RUS } from 'widgets/inputs/validation/constans/constans';



export const BuilderTask = () =>{
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<ITaskForm>({ mode: 'onBlur' });
  const {switchisModalErrActiveTask} = React.useContext<IContextNotebook>(ContextNotebook)
  const onAddTask = useService(reset,TASK,switchisModalErrActiveTask)


    return (
        <>
            <form className="flex flex-col  w-full" onSubmit={handleSubmit(onAddTask)}>
                <Input register={register} caseType={TEXT_RUS} titleRegister={TASK} titleLabel='Введите задчу' errMessage={errors.task?.message} />
                <Button isValid={isValid} title="Создать" />
            </form>
        </>
    );
};
