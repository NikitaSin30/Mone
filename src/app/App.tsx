import { Route, Routes } from 'react-router-dom';
import Layout from '../shared/layout/Layout';
import Main from '../pages/main/Main';
import PersonalArea from '../pages/account/Account';
import Analysis from '../pages/analysis/Analysis';
import Authorization from '../pages/auth/Authorization';
import Registration from '../pages/registration/Registration';
import React from 'react';
import { Context } from 'shared/context/context';
import { GlobalContext } from 'shared/context/context';



function App() {
 const [isLogin , setIsLogin] = React.useState<boolean>(false)

 const context: GlobalContext = { isLogin, setIsLogin };
   return (
     <>
       <Context.Provider value={context}>
         <Routes>
           <Route path="/" element={<Layout />}>
             <Route index element={<Main />} />
             <Route path="/account" element={<PersonalArea />} />
             <Route path="/analysis" element={<Analysis />} />
             <Route path="/login" element={<Authorization />} />
             <Route path="/registration" element={<Registration />} />
           </Route>
         </Routes>
       </Context.Provider>
     </>
   );
}

export default App;
