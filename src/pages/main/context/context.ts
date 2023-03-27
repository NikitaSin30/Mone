import React from 'react';
import { IContextMain } from './interfaces/interfaces';

export const ContextMain = React.createContext<IContextMain>({
    isModalActiveIncome                : false,
    switchIsModalActiveIncome          : () => null,
    isModalActiveSpending              : false ,
    switchIsModalActiveSpending        : () => null,
    isModalActiveAccumulation          : false,
    switchisModalActiveAccumulation    : () => null,
    isModalErrActiveAccumulation       : false,
    switchisModalErrActiveAccumulation : () => null,
});
