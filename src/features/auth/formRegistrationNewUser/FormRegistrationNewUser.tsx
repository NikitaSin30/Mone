import React from 'react';
import { useForm } from 'react-hook-form';
import { Context, GlobalContext } from 'shared/context/context';
import { IFormAuth } from 'features/auth/interfaces/interfaces';
import { serviceAuth } from '../service/serviceAuth';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';



function FormRegistrationNewUser(): React.ReactElement {
    const { onChangeIsLogin }  = React.useContext<GlobalContext>(Context);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormAuth>({ mode: 'onBlur' });


    async function onRegistration( user: IFormAuth) {
        try {
            await serviceAuth.midlewareRegistration(user, onChangeIsLogin);
        }
        catch (error) {
            console.log('Ошибка');
        }
        finally {
            reset();
        }
    }


    return (
        <form className="flex gap-1   flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2" onSubmit={handleSubmit(onRegistration)}>
            <h2 className="text-xl font-bold text-center">Регистрация</h2>
            <div className="flex justify-between">
                <span>Email </span> {errors?.email && <span className="text-red-700">{errors?.email?.message || 'Error'}</span>}
            </div>
            <Input caseType="email" register={register} labelTitle="email" />
            <div className="flex justify-between">
                <span>Страна</span>
                {errors?.country && <span className="text-red-700">{errors?.country?.message || 'Errors'}</span>}
            </div>
            <Input caseType="country" register={register} labelTitle="country" />
            <div className="flex justify-between">
                <span>Nickname </span> {errors?.nickName && <span className="text-red-700">{errors?.nickName?.message || 'Errors'}</span>}
            </div>
            <Input caseType="nickname" register={register} labelTitle="nickname" />
            <div className="flex justify-between">
                <span>Пароль</span> {errors?.password && <span className="text-red-700">{errors?.password?.message || 'Error'}</span>}
            </div>
            <Input caseType="password" register={register} labelTitle="password" />
            <Button isValid={isValid} title="Зарегистрироваться" />
        </form>
    );
}

export default FormRegistrationNewUser;
