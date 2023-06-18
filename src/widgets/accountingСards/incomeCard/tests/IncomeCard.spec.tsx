import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { IncomeCard } from '../IncomeCard';


describe('IncomeCard', () => {
    it('should render IncomeCard',() => {
        render(<IncomeCard/>)

        expect(screen.getByText('Доход')).toBeInTheDocument()
    })
})
