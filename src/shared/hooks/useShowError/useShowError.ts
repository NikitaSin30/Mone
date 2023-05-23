import React, { useCallback } from 'react';



export const useShowError = () => {
    const [isError,setIsError] = React.useState(false);
    const [messageError,setMessageError] = React.useState('');

    const showMessageError = useCallback((textError:string) => {
        setMessageError(textError);
        setIsError(true);

        setTimeout(()=>{
            setMessageError('');
            setIsError(false);
        },3000);
    },[]);

    return {
        isError,
        messageError,
        showMessageError,
    };
};
