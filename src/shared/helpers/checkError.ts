


export const checkError = (error:any) => {

    if (error instanceof Error) {
        return error;
    }

    return new Error('Приносим извенения.Произошла ошибка');
};
