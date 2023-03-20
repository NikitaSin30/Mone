import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from './assets/HomeIcon';
import { AccountIcon } from './assets/AccountIcon';
import { AnalysisIcon } from './assets/AnalysisIcon';
import { NotebookIcon } from './assets/NotebookIcon';



export const UserLogin = ():React.ReactElement => {
    return (
        <ul className="flex items-center sm:flex-col gap-3 pt-1">
            <li className="md:hover:scale-105">
                <Link to="/">
                    { HomeIcon }
                </Link>
            </li>
            <li className="md:hover:scale-105">
                <Link to="/account">
                    { AccountIcon }
                </Link>
            </li>
            <li className="md:hover:scale-105">
                <Link to="/analysis">
                    { AnalysisIcon }
                </Link>
            </li>
            <li className="md:hover:scale-105">
                <Link to="/notebook">
                    { NotebookIcon }
                </Link>
            </li>
        </ul>
    );
};
