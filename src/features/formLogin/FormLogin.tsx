import React from 'react';
import { Link } from 'react-router-dom';
import { useForm} from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Context } from 'shared/context/context';
import { Navigate } from 'react-router-dom';
import { GlobalContext } from 'shared/context/context';
import { FormValues } from "shared/typification/Typification";


function FormLogin(): React.ReactElement {
   const context = React.useContext<GlobalContext>(Context);

   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({ mode: 'onBlur' });

   function onLogin(data: FormValues): FormValues {
      const dataForm: FormValues = data;
      const {email,password} = dataForm
      onLoginRequest(email,password)
      onSwitchIsLogin()
      reset();
      return dataForm;
   }


      function onLoginRequest(email: string, password: string) {
      const auth = getAuth();
       signInWithEmailAndPassword(auth, email, password)
      .then((r) => console.log(r.user))
      .catch((error) => new Error(error.message));
       }

      function onSwitchIsLogin(): void {
      context.setIsLogin(!context.isLogin);
    }


   return !context.isLogin ? (
   //  <>
      <form
         className="flex gap-4  w-1/2 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg"
         onSubmit={handleSubmit(onLogin)}
      >
         <h2 className="text-xl font-bold text-center">Вход</h2>
         <label htmlFor="email">
            <p className="flex justify-between">
               <h2>Email</h2>{' '}
               {errors?.email && (
                  <h2 className="text-red-700">
                     {errors?.email?.message || 'Errors'}
                  </h2>
               )}
            </p>
            <input
               className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
               type="text"
               {...register('email', {
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
      <Link className='text-center hover:scale-110' to="/registration">Зарегистрироваться</Link>
      </form>
      // </>
   ) : <Navigate to='/'/>

}

export default FormLogin;
