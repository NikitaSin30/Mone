import React from 'react';
import Login from '../../features/auth/formLogin/FormLogin';

function Authorization(): React.ReactElement {
   return (
      <>
         <section className="flex-1 flex flex-col items-center justify-center">
            <Login></Login>
         </section>
      </>
   );
}

export default Authorization;
