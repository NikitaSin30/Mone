import { UserLogin } from 'widgets/appBar/userLogin/UserLogin';
import { NavigationAppBar } from '../NavigationAppBar';
import { render,screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserStore } from 'shared/store/userStore/UserStore';
import { IUser } from 'shared/store/userStore/interfaces.ts';

describe('Test NavigationBar',() => {

    let userStore : IUser | null;


    beforeEach(()=>{
        userStore = new UserStore();
    });

    afterEach(() => {
        userStore = null;
    });

    test('Render UserLogin', () => {
        render(<NavigationAppBar/>);
    });

    const userLogin = screen.getByTestId('userLogin');

    expect(userLogin).toBeInTheDocument();

});
