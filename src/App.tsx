import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app/App.css';
import AppBar from './widgets/appBar/AppBar';
import Main from './pages/main/Main';
function App() {
   return (
      <div className="wrapper">
         <main className="flex gap-3 bg-slate-300 md:gap-3">
            <AppBar></AppBar>
            {/* <nav className="flex  min-w-[130px] bg-black ">dsf</nav>
               <article className="w-5/6 flex flex-col gap-3 ">
                  <section className="flex-1 gap-3 flex max-h-[200px] ">
                     <div className="flex-1  bg-red-500">1</div>
                     <div className="flex-1  bg-red-600">2</div>
                     <div className="flex-1  bg-red-700">3</div>
                  </section>
                  <section className="flex-1 flex flex-col gap-3 ">
                     <div className="flex-1 bg-green-700">32</div>
                     <div className="flex-1 bg-green-800">232</div>
                  </section>
               </article>
               <aside className="w-1/6 max-w-[440px] flex-auto flex flex-col gap-5">
                  <div className=' bg-fuchsia-400 flex-1'></div>
                  <div className='bg-black flex-1'></div>
               </aside> */}
            <Main></Main>
         </main>
      </div>
   );
}

export default App;
