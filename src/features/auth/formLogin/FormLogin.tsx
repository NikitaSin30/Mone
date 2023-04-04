import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Context } from 'shared/context/context';
import { GlobalContext } from 'shared/context/context';
import { IFormAuth } from 'features/auth/interfaces/interfaces';
import { authService } from '../service/serviceAuth';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';



const FormLogin = (): React.ReactElement => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<IFormAuth>({ mode: 'onBlur' });


    async function onLogin(data: IFormAuth) {
        try {
            await authService.login(data);
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
        <form className="flex gap-1   flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2" onSubmit={handleSubmit(onLogin)}>
            <h2 className="text-xl font-bold text-center">Вход</h2>
             <Input caseType="email" register={register} titleRegister="email" errMessage={errors.email?.message} titleLabel='Email'/>
             <Input caseType="password" register={register} titleRegister="password" errMessage={errors.password?.message} titleLabel='Пароль'/>
             <Button isValid={isValid} title="Войти" />
             <Link className="text-center hover:scale-110" to="/registration">
                Зарегистрироваться
             </Link>
        </form>
        </>
    );
};

export default FormLogin;
