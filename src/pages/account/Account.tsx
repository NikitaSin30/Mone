import { useParams } from 'react-router-dom';

function Account():React.ReactElement {
   console.log(useParams());
   return (
      <section className="flex flex-col min-w-full gap-2">
         <div className="flex items-center gap-2  bg-slate-900 rounded-md shadow-lg">
            <div>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-20 h-20"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
               </svg>
            </div>
            <h2 className='text-xl font-bold sm:text-2xl'>Имя Фамилия</h2>
         </div>
         <div className='flex flex-col flex-1 bg-white  rounded-md shadow-lg py-3 text-lg'>
            <div className='flex-1'>
                <h2 className=' px-2 text-xl text-black font-semibold sm:text-2xl '>email: @adaadq.wwr</h2>
                <h2 className=' px-2 text-xl text-black font-semibold sm:text-2xl '>Телефон: +324242424242</h2>
                <h2 className=' px-2 text-xl text-black font-semibold sm:text-2xl '>Страна: Нарния</h2>
            </div>
            <button className='text-md  flex flex-col items-center justify-center px-2 py-2 bg-slate-900 font-semibold rounded-md sm:text-xl'>Выйти из аккаунта</button>
         </div>
      </section>
   );
}

export default Account
