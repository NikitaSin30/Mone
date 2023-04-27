import { UserLogin } from 'widgets/appBar/userLogin/UserLogin';
import { UserNotLogin } from 'widgets/appBar/userNotLogin/UserNotLogin';
import { NavigationAppBar } from '../NavigationAppBar';
import React from 'react';
import { render,screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { userStore } from 'shared/store/userStore/UserStore';




describe('Test NavigationBar',() => {

    jest.doMock('widgets/appBar/userNotLogin/UserNotLogin',() => ({
        UserNotLogin : jest.fn(() => <div>UserNotLogin</div>),
    }));

    jest.doMock('widgets/appBar/userLogin/UserLogin',() => ({
        UserLogin : jest.fn(() => <div>UserLogin</div>),
    }));

    jest.doMock('shared/store/userStore/UserStore', () => ({
        userStore : {
            isAuth : false,
        },
    }));

    test('Render UserNotLogin', () => {

        userStore.isAuth = false;
        render(<MemoryRouter><NavigationAppBar/></MemoryRouter>);
        expect(screen.getByText('UserNotLogin')).toBeInTheDocument();
    });

    afterEach(() =>{
        jest.clearAllMocks();
    });
});
