import AccountingCards from '../../widgets/accountingСards/AccountingCards'
<<<<<<< HEAD
function Main():React.ReactElement  {
   return (
      <>
         <article className=" flex gap-2  flex-col flex-1 w-6/6">
          <AccountingCards></AccountingCards>
            <section className="flex-1 flex flex-col gap-2 md:gap-3 sm:flex-row-reverse ">
               <aside className="  bg-white  flex-1  md:min-w-[110px]  sm:max-w-[220px] lg:max-w-[440px] rounded-md shadow-lg">
=======
function Main(): React.ReactElement {
   return (
      <>
         <article className=" flex gap-2 min-w-full flex-col flex-1 w-6/6">
          <AccountingCards></AccountingCards>
            <section className="flex-1 flex flex-col gap-2 md:gap-3 sm:flex-row-reverse ">
               <aside className="  bg-white  flex-1  md:min-w-[110px]  sm:max-w-[220px] lg:max-w-[440px] rounded-md shadow-lg">
                  dsdfsdfs
>>>>>>> 64832354bd56bd6069b552b04e57aad0d33f65d7
               </aside>
               <div className="flex flex-auto flex-col gap-2 md:gap-3">
                  <div className="flex-1  bg-white max-h-[300px] rounded-md shadow-lg">32</div>
                  <div className="flex-1  bg-white rounded-md shadow-lg">32</div>
               </div>
            </section>
         </article>
      </>
   );
}

export default Main;
