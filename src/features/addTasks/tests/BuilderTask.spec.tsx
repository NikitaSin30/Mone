import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BuilderTask } from '../BuilderTask';
import { todoService } from '../service/todoService';
import { act } from 'react-dom/test-utils';

const switchisModalErrActiveTask = jest.fn();
const setErromFromDB = jest.fn();

jest.spyOn(React, 'useContext').mockReturnValue({
    switchisModalErrActiveTask,
    setErromFromDB,
  });

describe('BuilderTask', () => {

    describe('Success case',() => {
    it('should send data from form when the input is not empty', async() => {

        todoService.addTask = jest.fn().mockImplementation(()=>Promise.resolve())

        render(<BuilderTask />);

        const input = screen.getByPlaceholderText('Введите задачу');
        const button = screen.getByText('Создать задачу');

        await act(async () => {
        await userEvent.type(input, 'Пронто-пронто');
        });

        expect(screen.queryByTestId('span-error')).toBeNull()
        userEvent.click(button)

        await waitFor(() => {
            expect(todoService.addTask).toHaveBeenCalled();
            expect(input).toHaveValue('');
        });

        expect(switchisModalErrActiveTask).not.toHaveBeenCalled();
        expect(setErromFromDB).not.toHaveBeenCalledWith('Произошла ошибка');
    });
    })

    describe('Cases whith Error', () => {

    it('should not be sent data from form when the input is empty', async() => {

        todoService.addTask = jest.fn().mockImplementation(()=>Promise.resolve())

        render(<BuilderTask />);

        const button = screen.getByText('Создать задачу');

        expect(screen.queryByTestId('span-error')).toBeNull()

        userEvent.click(button)
        expect(todoService.addTask).not.toHaveBeenCalled();
        expect(switchisModalErrActiveTask).not.toHaveBeenCalled();
        expect(setErromFromDB).not.toHaveBeenCalledWith('Произошла ошибка');

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

        expect(switchisModalErrActiveTask).not.toHaveBeenCalled();
        expect(setErromFromDB).not.toHaveBeenCalledWith('Произошла ошибка');
    });


    it('should call ErronFn when response was rejected from API',async() => {

        todoService.addTask = jest.fn().mockImplementation(()=>Promise.reject())

        render(<BuilderTask />);
        const input = screen.getByPlaceholderText('Введите задачу');
        const button = screen.getByText('Создать задачу');

        await act(async () => {
        await userEvent.type(input, 'Тест');
        fireEvent.focusOut(input);
        });

        expect(screen.queryByTestId('span-error')).toBeNull();

        userEvent.click(button)

        await waitFor(() => {
            expect(todoService.addTask).toHaveBeenCalled();
        });

        expect(switchisModalErrActiveTask).toHaveBeenCalled();
        expect(setErromFromDB).toHaveBeenCalledWith('Произошла ошибка');
        expect(input).toHaveValue('');

    })
    })

    describe('Others',() => {
        it('should hide spanError when client deleted not correct characters',async() =>{
        todoService.addTask = jest.fn().mockImplementation(()=>Promise.resolve())

        render(<BuilderTask/>)

        const input = screen.getByPlaceholderText('Введите задачу');

        expect(screen.queryByTestId('span-error')).toBeNull()

          await act(async() => {
         await userEvent.type(input,'Something')
         fireEvent.focusOut(input);
        })

        expect(await screen.findByTestId('span-error')).toBeInTheDocument()

         await act(async() => {
         await userEvent.type(input,'Тест')
         fireEvent.focusOut(input);
        })
        // не понимаю, почему он тут ложиться, ведь элемент уходит со страницы
        expect(screen.queryByTestId('span-error')).toBeNull()

        })

        })

    })
