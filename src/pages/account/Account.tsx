import { ioContainer } from 'api/IoC/ioc';
import { observer } from 'mobx-react-lite';
import { SyntheticEvent } from 'react';
import { userStore } from 'shared/store/userStore/UserStore';
import { PHOTO } from './assets/assets';



export const Account = observer(() => {

    const { user } = userStore;
    const onlogout = (e:SyntheticEvent) =>{
        e.stopPropagation();
        e.preventDefault();
        ioContainer.authService.logout();
    };


    return (
        <>
            <section className=" flex gap-2  flex-col flex-1 w-6/6">
                <div className="flex items-center gap-2  bg-slate-900 rounded-md shadow-lg">
                    <div>
                        {PHOTO}
                    </div>
                    <h2 className="text-xl font-bold sm:text-2xl">Никнейм : {}</h2>
                </div>
                <div className="flex flex-col flex-1 bg-white  rounded-md shadow-lg py-3 text-lg">
                    <div className="flex-1">
                        <span className=" px-2 text-xl text-black font-semibold sm:text-2xl ">Email : {userStore.user.email}</span>
                        {/* <span className=" px-2 text-xl text-black font-semibold sm:text-2xl ">Страна : {userStore.user.country}</span> */}
                    </div>
                    <div
                        onClick={onlogout}
                        className="text-md  flex flex-col items-center justify-center px-2 py-2 bg-slate-900 font-semibold
                rounded-md sm:text-xl"
                    >
            Выйти из аккаунта
                    </div>
                </div>
            </section>
        </>
    );
});
