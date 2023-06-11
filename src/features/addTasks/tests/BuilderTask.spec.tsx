import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BuilderTask } from '../BuilderTask';
import { todoService } from '../service/todoService';

describe('Test BuilderTask', () => {
    it('should not be sent data from form when the input is empty', async() => {
        const addTaskSpy = jest.spyOn(todoService, 'addTask').mockResolvedValueOnce();

        render(<BuilderTask />);

        const button = screen.getByText('Создать задачу');

        userEvent.click(button);

        expect(addTaskSpy).not.toHaveBeenCalled();

    });

    it('should send data from form when the input is not empty', async() => {
        const addTaskSpy = jest.spyOn(todoService, 'addTask');

        render(<BuilderTask />);
        const input = screen.getByPlaceholderText('Введите задачу');
        const form = screen.getByTestId('builder-task-form');

        userEvent.type(input, 'Пронто-пронто');
        fireEvent.submit(form);

        await waitFor(() => {
            expect(addTaskSpy).toHaveBeenCalled();
        });
    });
});
