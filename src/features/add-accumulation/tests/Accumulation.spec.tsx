import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import AccumulationModal from '../AccumulationModal';
import { accumulationService } from '../service/AccumulationService';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';



jest.spyOn(React, 'useContext').mockReturnValue({
    switchisModalActiveAccumulation:jest.fn(),
    switchisModalErrActiveAccumulation:jest.fn(),
    isModalActiveAccumulation: true,
  });

// jest.mock('React', () => ({
//   useContext: jest.fn().mockReturnValue({
//     isModalActiveAccumulation: true,
//     switchisModalActiveAccumulation: jest.fn(),
//     switchisModalErrActiveAccumulation: jest.fn(),
//   }),
// }));



describe('AccumulationModal',() =>{
    const setTextErrorMock = jest.fn();

 describe('Success',() =>{
    it('should send form with correct data',async() => {

    accumulationService.addAccumulation = jest.fn().mockImplementation(()=>Promise.resolve())

    render(<AccumulationModal setTextError={setTextErrorMock}/>)

    const input = screen.getByPlaceholderText('Введите задачу')
    const button = screen.getByText('Добавить');

    expect(screen.getByText('Сколько хотите отложить ?')).toBeInTheDocument()

     await act(async () => {
        await userEvent.type(input, '1000');
        fireEvent.focusOut(input);
        });

        userEvent.click(button)

        await waitFor(()=>{
           expect(accumulationService.addAccumulation).toBeCalled()
        })

// не понимаю пока как тестировать динамические булевые значения из пропсов или из контекста и тд 
    // expect(screen.queryByText('Сколько хотите отложить ?')).toBeNull()

 })
})


 describe('Cases with Error', () =>{
     it('should not send form witht not correct data',async() =>{

        accumulationService.addAccumulation = jest.fn().mockImplementation(()=> Promise.resolve())

        render(<AccumulationModal setTextError={setTextErrorMock}/>)

        const input = screen.getByPlaceholderText('Введите задачу')
        const button = screen.getByText('Добавить')

        expect(screen.queryByTestId('span-error')).toBeNull()

        await act(async () => {
        await userEvent.type(input, 'Тест');
        fireEvent.focusOut(input);
        });

        expect(await screen.findByTestId('span-error')).toBeInTheDocument()

        userEvent.click(button)

        await waitFor(()=>{
            expect(accumulationService.addAccumulation).not.toBeCalled()
        })
 })
 })

 describe('Other cases', () => {

    it('should show spanError if data is not correct and hide spanError after deleted not correct data', async() =>{
        accumulationService.addAccumulation = jest.fn().mockImplementation(()=> Promise.resolve())

        render(<AccumulationModal setTextError={setTextErrorMock}/>)

        const input = screen.getByPlaceholderText('Введите задачу')

        expect(screen.queryByTestId('span-error')).toBeNull()

        screen.debug()
        await act(async() => {
         await userEvent.type(input,'something')
         fireEvent.focusOut(input);
        })

        expect(await screen.findByTestId('span-error')).toBeInTheDocument()

        screen.debug()
        await act(async() => {
         await userEvent.type(input,'1000')
         fireEvent.focusOut(input);
        })
        screen.debug()
        // не понимаю, почему он тут ложиться, ведь элемент уходит со страницы
        expect(screen.queryByTestId('span-error')).toBeNull()
    })

 })
})
