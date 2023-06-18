import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SpendingCard } from '../SpendingCard';

describe('SpendingCard',() => {
    it('should render SpendingCard',() => {
        render(<SpendingCard/>)

        expect(screen.getByText('Потрачено')).toBeInTheDocument()
    })
})
