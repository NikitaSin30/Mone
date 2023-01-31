import { Route, Routes } from 'react-router-dom';
import Layout from '../shared/layout/Layout';
import Main from '../pages/main/Main';
import PersonalArea from '../pages/account/Account';
import Analysis from '../pages/analysis/Analysis';
import Authorization from '../pages/authorization/Authorization';
import Registration from '../pages/registration/Registration';
   import { getAuth } from "firebase/auth";
import React from 'react';


function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/account" element={<PersonalArea />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/auth" element={<Authorization />} />
            <Route path="/registration" element={<Registration />} />
         </Route>
      </Routes>
   );
}

export default App;
