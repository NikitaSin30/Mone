import React from 'react'
import { IContextNotebook } from './interfaces/interfaces';

export const ContextNotebook = React.createContext<IContextNotebook>({
isModalErrActiveTask:false,
switchisModalErrActiveTask: () => null
});
