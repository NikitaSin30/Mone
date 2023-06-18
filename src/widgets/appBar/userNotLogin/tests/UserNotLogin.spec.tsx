import '@testing-library/jest-dom/extend-expect';
import { render,screen } from '@testing-library/react';
import { UserNotLogin } from '../UserNotLogin';
import { BrowserRouter } from 'react-router-dom';



describe('UserLogin', () => {
    it('should render UserNotLogin',() => {
        render(<BrowserRouter>
                    <UserNotLogin/>
               </BrowserRouter>)

        expect(screen.getByTestId('user-not-login')).toBeInTheDocument()
    })
})
