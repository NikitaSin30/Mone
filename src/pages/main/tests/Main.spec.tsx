import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Main from '../Main';
import AccumulationCard from '../../../widgets/accountingСards/accumulationCard/AccumulationCard';


jest.mock('../../../widgets/accountingСards/accumulationCard/AccumulationCard', () => ({
    AccumulationCard : jest.fn(() => (
        <div>накоплено</div>
    )),
}));

describe('Test Main',() =>{

    test('Render Main',() => {
        render(<Main/>);
        const accumulationTitle = screen.getByText(/накоплено/i);

        expect(accumulationTitle).toBeInTheDocument();

    });
});
