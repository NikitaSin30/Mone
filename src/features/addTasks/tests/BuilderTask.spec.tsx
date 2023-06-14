import '@testing-library/jest-dom/extend-expect';

import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BuilderTask } from '../BuilderTask';
import { todoService } from '../service/todoService';
import { act } from 'react-dom/test-utils';

describe('Test BuilderTask', () => {
    it('should not be sent data from form when the input is empty', async() => {
        todoService.addTask = jest.fn().mockImplementation(()=>Promise.resolve())
        render(<BuilderTask />);
        const span = screen.queryByTestId('span-error')
        const button = screen.getByText('Создать задачу');

        expect(span).toBeNull()

        userEvent.click(button)
        expect(todoService.addTask).not.toHaveBeenCalled();

    });

    it('should send data from form when the input is not empty', async() => {

        todoService.addTask = jest.fn().mockImplementation(()=>Promise.resolve())
        render(<BuilderTask />);
        const input = screen.getByPlaceholderText('Введите задачу');
        const button = screen.getByText('Создать задачу');
        const span = screen.queryByTestId('span-error')

        await act(async () => {
        await userEvent.type(input, 'Пронто-пронто');
        });

        expect(span).toBeNull()
        userEvent.click(button)

        await waitFor(() => {
            expect(todoService.addTask).toHaveBeenCalled();
            expect(input).toHaveValue('');
        });
    });

        it('should not send data from form when the input is not filled with Cyrillic', async() => {

        todoService.addTask = jest.fn().mockImplementation(()=>Promise.resolve())

        render(<BuilderTask />);
        const input = screen.getByPlaceholderText('Введите задачу');
        const button = screen.getByText('Создать задачу');

        await act(async () => {
        await userEvent.type(input, 'Somethings');
        fireEvent.focusOut(input);
        });

        const span = await screen.findByTestId('span-error')
        await waitFor(() => {
         expect(span).toBeInTheDocument();
         });

        userEvent.click(button)

        await waitFor(() => {
            expect(todoService.addTask).not.toHaveBeenCalled();
        });
    });
});
