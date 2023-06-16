import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import AccumulationModal from '../AccumulationModal';
import { accumulationService } from '../service/AccumulationService';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';


// Вот этот тест компонента , которы является модалкой, и вот я замокал бульку на true, и тесты вроде как проходят. Но
// я не пойму
// 1 Вот когда мы пишем тест в этом компоненте, уже предпологается что он как бы активен или правильно что сделал тру мок
// 2 я управлять динамически этой булькой. что проверять компонент скрывается или нет.
// 3 ну и как правильно в этом случае spy или mock ? я подумал что spy,  так как мы чисто првоеряем вызов , но тут опять же
// функция которая мокнута должна менять бульку другого мока.
// 4 как тестировать такие взаимодействия моков ?
// 5 также пока путаю , когда нужно тестировать чисто вызов функции а когда чтобы возврат был.
// 6 Вот у меня есть useForm , я его не мокал нигде, там мне по сути нужно тестирвоать только то что reset удалил все данные
// с поля , но я подумал так - это ведь всё протестировано в React Form , я решил тестить то что именнно форма пустая стала , как итог
// В билдере компоненте всё ок работает так , а тут я не понимаю, почему не работает


const switchisModalActiveAccumulation = jest.fn()
const switchisModalErrActiveAccumulation = jest.fn()

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

        screen.debug()

       expect(input).toHaveValue('');




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
    it('should call functions when request was rejected', async() => {
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

    it('should hide the spanError when client deleted not correct characters and wrote correct', async() =>{

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
