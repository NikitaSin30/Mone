import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Main from '../Main';

jest.mock('widgets/cashFlow/CashFlow', () => {
    return {
        __esModule : true,
        default    : () => <div>CashFlow Mock</div>,
    };
});

jest.mock('widgets/accountingСards/incomeCard/IncomeCard', () => ({
    IncomeCard : () => <div>IncomeCard Mock</div>,
}));

jest.mock('widgets/accountingСards/spendingCard/SpendingCard', () => ({
    SpendingCard : () => <div>SpendingCard Mock</div>,
}));

jest.mock('widgets/accountingСards/accumulationCard/AccumulationCard', () => {
    return {
        __esModule : true,
        default    : () => <div>AccumulationCard Mock</div>,
    };
});

jest.mock('widgets/accountingСards/balanceCard/BalanceCard', () => ({
    BalanceCard : () => <div>BalanceCard Mock</div>,
}));

jest.mock('widgets/analysisGraphs/AnalysisGraphs', () => ({
    AnalysisGraphs : () => <div>AnalysisGraphs Mock</div>,
}));

describe('Main Page', () => {

    it('should render base html structure', () => {
        render(<Main />);

        expect(screen.getByText(/BalanceCard Mock/gi)).toBeInTheDocument();
        expect(screen.getByText(/IncomeCard Mock/gi)).toBeInTheDocument();
        expect(screen.getByText(/SpendingCard Mock/gi)).toBeInTheDocument();
        expect(screen.getByText(/AccumulationCard Mock/gi)).toBeInTheDocument();
    });
});
