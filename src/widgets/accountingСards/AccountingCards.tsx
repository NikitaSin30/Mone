function AccoutingCards(): React.ReactElement {
   return (
      <section className="flex-auto max-h-[240px] gap-2 flex  md:max-h-[200px] md:gap-3 ">
         <section className="flex-1 flex">
            <div className="flex flex-1   gap-2 flex-col  md:flex-row md:gap-3 ">
               <div className="flex-1 bg-slate-900 rounded-md shadow-lg ">
                  <h2>На счёте</h2>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-14 h-12"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                     />
                  </svg>
               </div>
               <div className="flex-1 bg-white  rounded-md shadow-lg">
               <h2 className="text-slate-900">Доход</h2>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="dark"
                     className="w-16 h-12"
                  >
                     <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                     <path
                        fillRule="evenodd"
                        d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                        clipRule="evenodd"
                     />
                  </svg>
               </div>
               <div className="flex-1 bg-white rounded-md shadow-lg">
                <h2 className="text-slate-900">Расход</h2>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="dark"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-16 h-12"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                     />
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                     />
                  </svg>
               </div>
            </div>
         </section>
         <aside className="flex flex-auto  max-w-[140px] sm:max-w-[220px]  lg:max-w-[440px]">
            <div className="  bg-white flex-1 rounded-md shadow-lg"></div>
         </aside>
      </section>
   );
}

export default AccoutingCards;
