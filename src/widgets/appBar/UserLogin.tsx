import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, AccountIcon, AnalysisIcon } from './assets/assets';

function UserLogin(): React.ReactElement {
    return (
        <ul className="flex flex-col gap-3 pt-1">
            <li className="md:hover:scale-105">
                <Link to="/">
                    <HomeIcon />
                </Link>
            </li>
            <li className="md:hover:scale-105">
                <Link to="/account">
                    <AccountIcon />
                </Link>
            </li>
            <li className="md:hover:scale-105">
                <Link to="/analysis">
                    <AnalysisIcon/>
                </Link>
            </li>
        </ul>
    );
}
export default UserLogin;
