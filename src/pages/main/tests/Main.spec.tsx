import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// import { mockComponent } from 'test/helpers/mockComponent';
import Main from '../Main';

import { BalanceCard } from 'widgets/accountingСards/balanceCard/BalanceCard';
import { SpendingCard } from 'widgets/accountingСards/spendingCard/SpendingCard';
import { IncomeCard } from 'widgets/accountingСards/incomeCard/IncomeCard';

// export const mockComponent = (pathToComponent:string,stringOutput : string) => {
//     return jest.mock(pathToComponent, () => ({
//         __esModule : true,
//         default    : () => <div>{stringOutput}</div>,
//     }));
// };

// mockComponent('../../../widgets/accountingСards/accumulationCard/AccumulationCard','накоплено');
// mockComponent('../../../widgets/accountingСards/spendingCard/SpendingCard','потрачено');
// mockComponent('../../../widgets/accountingСards/incomeCard/IncomeCard','доход');
// mockComponent('../../../widgets/accountingСards/balanceCard/BalanceCard','на счёте');

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

    // beforeAll(() => {
    //     mockComponent('../../../widgets/accountingСards/accumulationCard/AccumulationCard', 'накоплено');
    //     mockComponent('../../../widgets/accountingСards/spendingCard/SpendingCard', 'потрачено');
    //     mockComponent('../../../widgets/accountingСards/incomeCard/IncomeCard', 'доход');
    //     mockComponent('../../../widgets/accountingСards/balanceCard/BalanceCard', 'на счёте');
    // });
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
