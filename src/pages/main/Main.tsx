import React from 'react';
import AccountingCards from '../../widgets/accountingСards/AccountingCards'
import { Context } from 'shared/context/context';
import { Navigate, redirect } from 'react-router';
import { GlobalContext } from "shared/context/context";

function Main():React.ReactElement  {
   const context = React.useContext<GlobalContext>(Context);
   return  context.isLogin ? (
      <>
         <article className=" flex gap-2  flex-col flex-1 w-6/6">
          <AccountingCards></AccountingCards>
            <section className="flex-1 flex flex-col gap-2 md:gap-3 sm:flex-row-reverse ">
               <aside className="  bg-white  flex-1  md:min-w-[110px]  sm:max-w-[220px] lg:max-w-[440px] rounded-md shadow-lg">
               </aside>
               <div className="flex flex-auto flex-col gap-2 md:gap-3">
                  <div className="flex-1  bg-white max-h-[300px] rounded-md shadow-lg">32</div>
                  <div className="flex-1  bg-white rounded-md shadow-lg">32</div>
               </div>
            </section>
         </article>
      </>
   ) : <Navigate to='/auth'/>
}

export default Main;
