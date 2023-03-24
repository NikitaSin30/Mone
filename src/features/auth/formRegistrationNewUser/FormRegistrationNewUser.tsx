import React from 'react';
import { useForm } from 'react-hook-form';
import { Context, GlobalContext } from 'shared/context/context';
import { IFormAuth } from 'features/auth/interfaces/interfaces';
import { authService } from '../service/serviceAuth';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { Label } from 'widgets/inputs/label/Label';



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
            await authService.registration(user, onChangeIsLogin);
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
            <Label error={errors.email} />
            <Input caseType="email" register={register} labelTitle="email" />
            <Label error={errors.country} />
            <Input caseType="country" register={register} labelTitle="country" />
            <Label error={errors.nickName} />
            <Input caseType="nickname" register={register} labelTitle="nickname" />
            <Label error={errors.password} />
            <Input caseType="password" register={register} labelTitle="password" />
            <Button isValid={isValid} title="Зарегистрироваться" />
        </form>
    );
}

export default FormRegistrationNewUser;
