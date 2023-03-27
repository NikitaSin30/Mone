import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IFormAuth } from 'features/auth/interfaces/interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { useService } from 'shared/hooks/useService/useService';
import { LOGIN } from 'shared/hooks/useService/constans/constans';
import { ContextGlobal, IContextGlobal } from 'shared/context/context';
import { EMAIL,PASSWORD } from 'widgets/inputs/validation/constans/constans';

const FormLogin = (): React.ReactElement => {
    const { onChangeIsLogin } = React.useContext<IContextGlobal>(ContextGlobal);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<IFormAuth>({ mode: 'onBlur' });

    const onLogin = useService(reset, LOGIN,onChangeIsLogin);


    return (
        <>
            <form className="flex gap-1 w-full  flex-col  text-white bg-slate-900 py-6 px-8 rounded-xl shadow-lg md:w-1/2" onSubmit={handleSubmit(onLogin)}>
                <h2 className="text-xl font-bold text-center">Вход</h2>
                <Input caseType={EMAIL} register={register} titleRegister={EMAIL} errMessage={errors.email?.message} titleLabel='Email'/>
                <Input caseType={PASSWORD} register={register} titleRegister={PASSWORD} errMessage={errors.password?.message} titleLabel='Пароль'/>
                <Button isValid={isValid} title="Войти" />
                <Link className="text-center hover:scale-110" to="/registration">
                Зарегистрироваться
                </Link>
            </form>
        </>
    );
};

export default FormLogin;
