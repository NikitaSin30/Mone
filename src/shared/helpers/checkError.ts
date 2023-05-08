


export const checkError = (error:unknown) => {

    if (error instanceof Error) {
        return error;
    }

    return new Error('Приносим извенения.Произошла ошибка');
};
