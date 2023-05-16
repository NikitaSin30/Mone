import React from 'react';
import { IUseStringReturn } from './interfaces';


export const useString = (initialValue : string ): IUseStringReturn => {

    const [value , setValue] = React.useState<string>(initialValue);

    const setText = React.useCallback((text:string)=>{
        setValue(text);
    },[]);

    return {
        value,
        setText,
    };

};
