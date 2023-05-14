

export const showErrorFromDB = (message: string,setIsError:()=> void,setErrorMessageFromDB: (message:string) => void) => {
    setErrorMessageFromDB(message);
    setIsError();
    
    setTimeout(()=>{
        setErrorMessageFromDB('');
        setIsError();
    },3000);
};
