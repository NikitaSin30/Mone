import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormAuth } from 'features/auth/interfaces';
import { Input } from 'widgets/inputs/Input';
import { Button } from 'widgets/modals/ui/button/Button';
import { useService } from 'shared/hooks/useService/useService';
import { CASE_USESERVICE_REGISTRATION } from 'shared/hooks/useService/constans';
import { CASE_TYPE_EMAIL, CASE_TYPE_PASSWORD, CASE_TYPE_COUNTRY, CASE_TYPE_NICKNAME } from 'widgets/inputs/validation/constans';
import { TITLE_REGISTOR_COUNTRY,
    TITLE_REGISTOR_EMAIL,
    TITLE_REGISTOR_NICKNAME,
    TITLE_REGISTOR_PASSWORD } from 'widgets/inputs/validation/constans';
import { TITLE_LABEL_EMAIL,TITLE_LABEL_PASSWORD,TITLE_LABEL_COUNTRY,TITLE_LABEL_NICKNAME } from 'widgets/inputs/label/constans';
import { TITLE_BUTTON_REGISTRATION } from 'widgets/modals/ui/button/constans';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { authService } from '../service/serviceAuth';
import { useNavigate } from 'react-router';
import { LOGIN } from 'shared/routes/path';


function FormRegistrationNewUser(): React.ReactElement {
    const [messageFromDB, setmessageFromDB] = React.useState('');
    const { value: isSuccesReg, toggle:setIsSuccesReg } = useToggle(false);
    const { value: isErrorReg, toggle:setisErrorReg } = useToggle(false);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormAuth>({ mode: 'onBlur' });

    // const onRegistration = useService(reset, CASE_USESERVICE_REGISTRATION, setIsSuccesReg);

    const navigate = useNavigate();

    const onRegistration = async(formData:IFormAuth) => {
        try {
            const { message } = await authService.registration(formData);

            setmessageFromDB(message);
            setIsSuccesReg();

            setTimeout(()=>{
                navigate(LOGIN);
            },3000);

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
        <form
            className="flex gap-1 w-full  flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
            onSubmit={handleSubmit(onRegistration)}>
            {isSuccesReg && <span className='text-green-600 '>{messageFromDB}</span>}
            {isErrorReg && <span className='text-red-600 '>{messageFromDB}</span>}
            <h2 className="text-xl font-bold text-center">Регистрация</h2>
            <Input
                caseType={CASE_TYPE_EMAIL}
                register={register}
                titleRegister={TITLE_REGISTOR_EMAIL}
                titleLabel={TITLE_LABEL_EMAIL}
                errMessage={errors.email?.message}
            />
            <Input
                caseType={CASE_TYPE_COUNTRY}
                register={register}
                titleRegister={TITLE_REGISTOR_COUNTRY}
                titleLabel={TITLE_LABEL_COUNTRY}
                errMessage={errors.country?.message}
            />
            <Input
                caseType={CASE_TYPE_NICKNAME}
                register={register}
                titleRegister={TITLE_REGISTOR_NICKNAME}
                titleLabel={TITLE_LABEL_NICKNAME}
                errMessage={errors.nickname?.message}
            />
            <Input
                caseType={CASE_TYPE_PASSWORD}
                register={register}
                titleRegister={TITLE_REGISTOR_PASSWORD}
                titleLabel={TITLE_LABEL_PASSWORD}
                errMessage={errors.password?.message}
            />
            <Button isValid={isValid} title={TITLE_BUTTON_REGISTRATION} />
        </form>
    );
}

export default FormRegistrationNewUser;
