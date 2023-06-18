import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BalanceCard } from '../BalanceCard';


describe('Test balance card', () => {
    it('should render base html structure', () =>{
        render(<BalanceCard/>);
        expect(screen.getByText('На счёте')).toBeInTheDocument()
    });
});
