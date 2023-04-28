import { UserLogin } from '../../userLogin/UserLogin';
import { UserNotLogin } from '../../userNotLogin/UserNotLogin';
import { NavigationAppBar } from '../NavigationAppBar';
import React from 'react';
import { render,screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { userStore } from '../../../../shared//store/userStore/UserStore';

jest.mock('../../userNotLogin/UserNotLogin',() => ({
    UserNotLogin : jest.fn(() => (<div data-testid="UserNotLogin"></div>)),
}));

jest.mock('../../userLogin/UserLogin',() => ({
    UserLogin : jest.fn(() => <div>UserLogin</div>),
}));

jest.mock('../../../../shared//store/userStore/UserStore', () => ({
    userStore : {
        isAuth : false,
    },
}));



describe('Test NavigationBar',() => {


    test('Render UserNotLogin', () => {
        userStore.isAuth = false;


        const { getByTestId } = render(<NavigationAppBar/>);

        expect(getByTestId("UserNotLogin")).toBeInTheDocument();

    });


});
