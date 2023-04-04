import React from 'react';
import { useForm } from 'react-hook-form';
import { Context, GlobalContext } from 'shared/context/context';
import { IFormAuth } from 'features/auth/interfaces/interfaces';
import { authService } from '../service/serviceAuth';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';



function FormRegistrationNewUser(): React.ReactElement {
    // const { onChangeIsLogin }  = React.useContext<GlobalContext>(Context);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormAuth>({ mode: 'onBlur' });


    async function onRegistration( user: IFormAuth) {
        try {
            await authService.registration(user);
        }
        catch (error) {
            if (error instanceof Error) {
                return new Error();
            }
        }
        finally {
            reset();
        }
    }


    return (
        <form className="flex gap-1   flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2" onSubmit={handleSubmit(onRegistration)}>
            <h2 className="text-xl font-bold text-center">Регистрация</h2>
            <Input caseType="email" register={register} titleRegister="email" titleLabel='Email' errMessage={errors.email?.message} />
            <Input caseType="country" register={register} titleRegister="country" titleLabel='Страна' errMessage={errors.country?.message} />
            <Input caseType="nickname" register={register} titleRegister="nickname" titleLabel='Nickname' errMessage={errors.nickname?.message} />
            <Input caseType="password" register={register} titleRegister="password" titleLabel='Пароль' errMessage={errors.password?.message}/>
            <Button isValid={isValid} title="Зарегистрироваться" />
        </form>
    );
}

export default FormRegistrationNewUser;
