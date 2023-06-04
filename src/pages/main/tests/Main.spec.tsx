import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Main from '../Main';

import { BalanceCard } from 'widgets/accountingСards/balanceCard/BalanceCard';
import { SpendingCard } from 'widgets/accountingСards/spendingCard/SpendingCard';
import { IncomeCard } from 'widgets/accountingСards/incomeCard/IncomeCard';


jest.mock('../../../widgets/accountingСards/accumulationCard/AccumulationCard', () => ({
    __esModule : true,
    default    : () => <div>накоплено</div>,
}));

jest.mock('../../../widgets/accountingСards/spendingCard/SpendingCard', () => ({
    __esModule : true,
    default    : () => <div>потрачено</div>,
}));

jest.mock('../../../widgets/accountingСards/incomeCard/IncomeCard', () => ({
    __esModule : true,
    default    : () => <div>доход</div>,
}));

jest.mock('../../../widgets/accountingСards/balanceCard/BalanceCard', () => ({
    __esModule : true,
    default    : () => <div>на счёте</div>,
}));

describe('Test Main', () => {

    test('Render Main', () => {

        render(<Main />);
        const accumulationTitle = screen.getByText(/накоплено/i);
        const spendingTitle = screen.getByText(/потрачено/i);
        const incomeTitle = screen.getByText(/доход/i);
        const balanceTitle = screen.getByText(/на счёте/i);

        expect(accumulationTitle).toBeInTheDocument();
        expect(spendingTitle).toBeInTheDocument();
        expect(balanceTitle).toBeInTheDocument();
        expect(incomeTitle).toBeInTheDocument();

    });
});
