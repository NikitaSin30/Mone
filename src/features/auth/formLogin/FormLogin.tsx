import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IFormAuth } from 'features/auth/interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { CASE_TYPE_EMAIL, CASE_TYPE_PASSWORD } from 'widgets/inputs/validation/constans';
import { TITLE_REGISTOR_PASSWORD,TITLE_REGISTOR_EMAIL } from 'widgets/inputs/validation/constans';
import { TITLE_LABEL_PASSWORD, TITLE_LABEL_EMAIL } from 'widgets/inputs/label/constans';
import { TITLE_BUTTON_LOGIN } from 'widgets/modals/ui/button/constans';
import { authService } from '../service/serviceAuth';
import { useToggle } from 'shared/hooks/useToggle/useToggle';




const FormLogin = (): React.ReactElement => {

    const [messageFromDB, setmessageFromDB] = React.useState('');
    const { value: isErrorReg, toggle:setisErrorReg } = useToggle(false);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm<IFormAuth>({ mode: 'onBlur' });


    const location = useLocation();
    const navigate = useNavigate();

    const fromPage : string = location.state?.from?.pathname || '/';

    const onLogin = async(data : IFormAuth) => {
        try {
            await authService.login(data);
            navigate(fromPage);
            reset();
        }
        catch (error) {
            if (error instanceof Error) {
                setmessageFromDB(error.message);
                setisErrorReg();

                setTimeout(()=>{
                    setmessageFromDB('');
                    setisErrorReg();
                },3000);
            }
        }
    };

    return (
        <>
            <form className="flex gap-1 w-full  flex-col  text-white bg-slate-900 py-6 px-8 rounded-xl shadow-lg md:w-1/2"
                onSubmit={handleSubmit(onLogin)}>
                {isErrorReg && <span className='text-red-600 '>{messageFromDB}</span>}
                <h2 className="text-xl font-bold text-center">Вход</h2>
                <Input
                    caseType={CASE_TYPE_EMAIL}
                    register={register}
                    titleRegister={TITLE_REGISTOR_EMAIL}
                    errMessage={errors.email?.message}
                    titleLabel={TITLE_LABEL_EMAIL}
                />
                <Input
                    caseType={CASE_TYPE_PASSWORD}
                    register={register}
                    titleRegister={TITLE_REGISTOR_PASSWORD}
                    errMessage={errors.password?.message}
                    titleLabel={TITLE_LABEL_PASSWORD}
                />
                <Button isValid={isValid} title={TITLE_BUTTON_LOGIN}/>
                <Link className="text-center hover:scale-110" to="/registration">
            Зарегистрироваться
                </Link>
            </form>
        </>
    );
};

export default FormLogin;
