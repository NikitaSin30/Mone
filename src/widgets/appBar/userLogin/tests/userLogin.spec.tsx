import '@testing-library/jest-dom/extend-expect';
import { render,screen } from '@testing-library/react';
import { UserLogin } from '../UserLogin';
import { BrowserRouter } from 'react-router-dom';



describe('UserLogin', () => {
    it('should render UserLogin',() => {
        render(<BrowserRouter>
<UserLogin/>
        </BrowserRouter>)

        expect(screen.getByTestId('user-login')).toBeInTheDocument()
    })
})
