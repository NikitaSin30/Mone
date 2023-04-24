import React from 'react';
import { IuseToggleReturn } from './interfaces';


export const useToggle = (initialValue : boolean ): IuseToggleReturn => {

    const [value , setValue] = React.useState<boolean>(initialValue);

    const toggle = React.useCallback(()=>{

        setValue(value => !value);
    },[]);

    return {
        value,
        toggle,
    };

};
