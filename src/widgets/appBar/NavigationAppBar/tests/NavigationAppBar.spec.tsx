import { UserLogin } from '../../userLogin/UserLogin';
import { UserNotLogin } from '../../userNotLogin/UserNotLogin';
import { NavigationAppBar } from '../NavigationAppBar';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render,screen } from '@testing-library/react';


describe('NavigationAppBar', () => {
  it('should render UserLogin component when isAuth is true', () => {

     jest.mock('../../../../shared//store/userStore/UserStore', () => ({
      default: {
        isAuth: true,
      },
    }));

    render(
 <MemoryRouter>
        <NavigationAppBar />
      </MemoryRouter>
   );

    expect( screen.getByTestId('user-login')).toBeInTheDocument();
    expect(screen.getByTestId('user-not-login')).not.toBeInTheDocument();
  });

  it('should render UserNotLogin component when isAuth is false', () => {
     jest.mock('../../../../shared//store/userStore/UserStore', () => ({
      default: {
        isAuth: false,
      },
    }));

    render( <MemoryRouter>
        <NavigationAppBar />
      </MemoryRouter>);

    expect(screen.getByTestId('user-not-login')).toBeInTheDocument();
    expect(screen.getByTestId('user-login')).not.toBeInTheDocument();
  });
});
