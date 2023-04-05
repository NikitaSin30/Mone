import React from 'react';
import { ContextGlobal, IContextGlobal } from 'shared/context/context';
import { userStore } from 'shared/store/userStore/UserStore';



const Account = () => {
    const { onChangeIsLogin } = React.useContext<IContextGlobal>(ContextGlobal);
    const { email } = userStore.user;

    return (
        <section className=" flex gap-2   flex-col flex-1 w-6/6">
            <div className="flex flex-col flex-1 bg-card  rounded-md shadow-lg py-3 text-lg">
                <div className="flex-1">
                    <span className=" px-2 text-xl text-black font-semibold sm:text-2xl ">Email: {email}</span>
                </div>
                <button onClick={onChangeIsLogin} className="text-md  flex flex-col items-center justify-center px-2 py-2 bg-slate-900 font-semibold
                rounded-md sm:text-xl">
            Выйти из аккаунта
                </button>
            </div>
        </section>
    );
};

export default Account;
