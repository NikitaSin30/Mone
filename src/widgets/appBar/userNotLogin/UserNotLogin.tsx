import React from 'react';
import { Link } from 'react-router-dom';
import { LoginIcon } from './assets/LoginIcon';
import { RegistrationIcon } from './assets/RegistrationIcon';



export const UserNotLogin = (): React.ReactElement => {
    return (
        <ul data-testid='user-not-login' className="flex items-center sm:flex-col gap-3 pt-1">
            <li className="md:hover:scale-105">
                <Link to="/login">
                    { LoginIcon }
                </Link>
            </li>
            <li className="md:hover:scale-105">
                <Link to="/registration">
                    { RegistrationIcon }
                </Link>
            </li>
        </ul>
    );
};
