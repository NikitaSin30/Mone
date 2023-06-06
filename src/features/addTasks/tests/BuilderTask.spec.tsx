import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BuilderTask } from '../BuilderTask';
import { todoService } from '../service/todoService';

// jest.mock('react-hook-form', () => ({
//     useForm : jest.fn(() => ({
//         register     : jest.fn(),
//         reset        : jest.fn(),
//         handleSubmit : jest.fn(),
//         formState    : {
//             errors  : {},
//             isValid : true,
//         },
//     })),
// }));
// jest.mock('../service/todoService', () => ({
//     todoService : {
//         addTask : jest.fn(),
//     },
// }));

describe('Test BuilderTask', () => {
    it('should not be sent data from form when the input is empty', async() => {
        const addTaskSpy = jest.spyOn(todoService, 'addTask').mockResolvedValueOnce();

        render(<BuilderTask />);

        const button = screen.getByText('Создать задачу');

        userEvent.click(button);

        expect(addTaskSpy).not.toHaveBeenCalled();

    });

    it('should send data from form when the input is not empty', async() => {
        const addTaskSpy = jest.spyOn(todoService, 'addTask').mockResolvedValueOnce();

        render(<BuilderTask />);

        const input = screen.getByPlaceholderText('Введите задачу');
        const button = screen.getByText('Создать задачу');

        userEvent.type(input, 'Test task');
        userEvent.click(button);

        await waitFor(() => {
            expect(addTaskSpy).toHaveBeenCalled();
        });

    });
});
