import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import AccumulationModal from '../AccumulationModal';
import { accumulationService } from '../service/AccumulationService';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { waitForElementToBeRemoved } from '@testing-library/react';


const switchisModalActiveAccumulation = jest.fn()
const  switchisModalErrActiveAccumulation = jest.fn()

jest.spyOn(React, 'useContext').mockReturnValue({
    switchisModalActiveAccumulation,
    switchisModalErrActiveAccumulation,
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
    it('should call function when request was rejected', async() => {
        accumulationService.addAccumulation = jest.fn().mockImplementation(() => Promise.reject())

        render(<AccumulationModal setTextError={setTextErrorMock}/>)

        const input = screen.getByPlaceholderText('Введите задачу')
        const button = screen.getByText('Добавить')

        await act(async() => {
            await userEvent.type(input,'1000')
        })

        userEvent.click(button)

        await waitFor(() => {
        expect(accumulationService.addAccumulation).toBeCalled()
        })

        expect(switchisModalActiveAccumulation).toBeCalled()
        expect(setTextErrorMock).toBeCalled()
        expect(switchisModalErrActiveAccumulation).toBeCalled()

    })
 })

 describe('Other cases', () => {

    it('should hide the spanError when client deleted not correct characters', async() =>{

        render(<AccumulationModal setTextError={setTextErrorMock}/>)

        const input = screen.getByPlaceholderText('Введите задачу')

        expect(screen.queryByTestId('span-error')).toBeNull()

        await act(async() => {
         await userEvent.type(input,'.')
         fireEvent.focusOut(input);
        })

        expect(await screen.findByTestId('span-error')).toBeInTheDocument()

        await act(async() => {
        await userEvent.type(input,'1000')
        fireEvent.focusOut(input);
        })

        await waitFor(() => {
            expect(screen.queryByTestId('span-error')).toBeNull()
        });

    })
})
})
