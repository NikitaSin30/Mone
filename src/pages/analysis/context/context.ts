import React from 'react';
import { IContextAnalysis } from './interfaces';

export const ContextAnalysis = React.createContext<IContextAnalysis>({
    isModalActiveAnalysis          : false,
    switchIsModalActiveAnalysis    : () => null,
    isModalErrActiveAnalysis       : false,
    switchIsModalErrActiveAnalysis : () => null,
});
