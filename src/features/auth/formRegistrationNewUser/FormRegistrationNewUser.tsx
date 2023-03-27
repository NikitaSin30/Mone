import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormAuth } from 'features/auth/interfaces/interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { useService } from 'shared/hooks/useService/useService';
import { REGISTRATION } from 'shared/hooks/useService/constans/constans';
import { ContextGlobal, IContextGlobal } from 'shared/context/context';
import { EMAIL,PASSWORD,COUNTRY,NICKNAME } from 'widgets/inputs/validation/constans/constans';



function FormRegistrationNewUser(): React.ReactElement {
    const {onChangeIsLogin} = React.useContext<IContextGlobal>(ContextGlobal)

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormAuth>({ mode: 'onBlur' });

    const onRegistration = useService(reset,REGISTRATION,onChangeIsLogin)

    return (
        <form className="flex gap-1 w-full  flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2" onSubmit={handleSubmit(onRegistration)}>
            <h2 className="text-xl font-bold text-center">Регистрация</h2>
            <Input caseType={EMAIL} register={register} titleRegister={EMAIL} titleLabel='Email' errMessage={errors.email?.message} />
            <Input caseType={COUNTRY} register={register} titleRegister={COUNTRY} titleLabel='Страна' errMessage={errors.country?.message} />
            <Input caseType={NICKNAME} register={register} titleRegister={NICKNAME} titleLabel='Nickname' errMessage={errors.nickName?.message} />
            <Input caseType={PASSWORD} register={register} titleRegister={PASSWORD} titleLabel='Пароль' errMessage={errors.password?.message}/>
            <Button isValid={isValid} title="Зарегистрироваться" />
        </form>
    );
}

export default FormRegistrationNewUser;
