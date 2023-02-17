import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Context } from 'shared/context/context';
import { GlobalContext } from 'shared/context/context';
import { IFormAuth } from 'features/auth/interfaces/interfaces';
import { serviceAuth } from '../service/serviceAuth';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';



const FormLogin = (): React.ReactElement => {
    const { onChangeIsLogin } = React.useContext<GlobalContext>(Context);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<IFormAuth>({ mode: 'onBlur' });


    async function onLogin({ email,password }: IFormAuth) {
        try {
            await serviceAuth.midlewareLogin(email, password, onChangeIsLogin);
        }
        catch (error) {
            console.log('Ошибка');
        }
        finally {
            reset();
        }
    }

    return (
        <form className="flex gap-1   flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2" onSubmit={handleSubmit(onLogin)}>
            <h2 className="text-xl font-bold text-center">Вход</h2>
            <div className="flex justify-between">
                <span>Email</span> {errors?.email && <span className="text-red-700">{errors?.email?.message || 'Errors'}</span>}
            </div>
            <Input caseType="email" register={register} labelTitle="email" />
            <div className="flex justify-between">
                <span>Пароль</span> {errors?.password && <span className="text-red-700">{errors?.password?.message || 'Error'}</span>}
            </div>
            <Input caseType="password" register={register} labelTitle="password" />
            <Button isValid={isValid} title="Войти" />
            <Link className="text-center hover:scale-110" to="/registration">
          Зарегистрироваться
            </Link>
        </form>
    );
};

export default FormLogin;
