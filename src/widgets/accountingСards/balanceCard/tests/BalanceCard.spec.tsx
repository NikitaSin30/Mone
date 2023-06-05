import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BalanceCard } from '../BalanceCard';

jest.mock('widgets/accountingСards/CardItem/CardItem',() =>({
    CardItem : () => <div>CardItem Mock</div>,
}));


describe('Test balance card', () => {
    it('should render base html structure', () =>{
        render(<BalanceCard/>);

        expect(screen.getByText(/CardItem Mock/gi)).toBeInTheDocument();
    });
});
