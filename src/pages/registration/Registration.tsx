import React from 'react';
import RegistrationNewUser from '../../features/auth/formRegistrationNewUser/FormRegistrationNewUser'
import { observer } from "mobx-react-lite";
import { observable } from "mobx";

function Registration(): React.ReactElement {

   return (
      <>
         <section className="flex-1 flex flex-col items-center justify-center">
            <RegistrationNewUser/>
         </section>
      </>
   );
}

export default Registration;
