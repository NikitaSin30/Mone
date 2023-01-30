import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
   nickName: string;
   password: string;
};

function Login(): React.ReactElement {
   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({ mode: 'onBlur' });

   function onSubmit<FormValues>(data: FormValues): FormValues {
      const dataForm: FormValues = data;
      reset();
      console.log(dataForm);
      return dataForm;
   }

   return (
    <>
      <form
         className="flex gap-4  w-1/2 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg"
         onSubmit={handleSubmit(onSubmit)}
      >
         <h2 className="text-xl font-bold text-center">Вход</h2>
         <label htmlFor="nickName">
            <p className="flex justify-between">
               <h2>Nick name </h2>{' '}
               {errors?.nickName && (
                  <h2 className="text-red-700">
                     {errors?.nickName?.message || 'Errors'}
                  </h2>
               )}
            </p>
            <input
               className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
               type="text"
               {...register('nickName', {
                  required: 'Обязательное Поле',
                  minLength: {
                     value: 5,
                     message: 'Минимум 5 символов',
                  },
                  pattern: {
                     value: /[A-Za-z]{5}/,
                     message: 'Используйте латиницу',
                  },
               })}
            />
         </label>
         <label htmlFor="password">
            <p className="flex justify-between">
               <h2>Пароль</h2>{' '}
               {errors?.password && (
                  <h2 className="text-red-700">
                     {errors?.password?.message || 'Error'}
                  </h2>
               )}
            </p>
            <input
               type="text"
               {...register('password', {
                  required: 'Обязательное Поле',
                  minLength: {
                     value: 6,
                     message: 'Минимум 6 символов',
                  },
                  pattern: {
                     value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                     message: 'Введите латиницу разных регистров и число',
                  },
               })}
               className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
            />
         </label>
         <input
            className="flex-1 w-full placeholder-slate-900 cursor-pointer bg-white text-slate-900 font-semibold py-3 rounded-md shadow-lg "
            type="submit"
            value="Войти"
         />
      <Link className='text-center hover:scale-110' to="/auth">Зарегистрироваться</Link>
      </form>
      </>
   );
}

export default Login;
