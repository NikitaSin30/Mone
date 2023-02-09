import React from 'react';
import RegistrationNewUser from '../../features/auth/formRegistrationNewUser/FormRegistrationNewUser';


function Registration(): React.ReactElement {
    return (
        <>
            <section className="flex-1 flex flex-col items-center justify-center">
                <RegistrationNewUser />
            </section>
        </>
    );
}

export default Registration;
