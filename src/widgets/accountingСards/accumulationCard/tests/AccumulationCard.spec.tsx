import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AccumulationCard from '../AccumulationCard';

describe('AccumulationCard',() => {
    it('should render AccumulationCard',() => {

        render(<AccumulationCard/>)
        expect(screen.getByText('Накоплено')).toBeInTheDocument()
    })
})
