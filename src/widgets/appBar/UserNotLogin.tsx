import React from 'react';
import { Link } from 'react-router-dom';
import { LoginIcon, RegistrationIcon } from './assets/assets';
function UserNotLogin(): React.ReactElement {
    return (
        <ul className="flex flex-col gap-3 pt-1">
            <li className="md:hover:scale-105">
                <Link to="/login">
                    <LoginIcon/>
                </Link>
            </li>
            <li className="md:hover:scale-105">
                <Link to="/registration">
                    <RegistrationIcon/>
                </Link>
            </li>
        </ul>
    );
}

export default UserNotLogin;
