

export const getToken = ():string => {
    const token = JSON.parse(localStorage.getItem('wallet')!);

    if (!token) {
        throw new Error('Вам необходимо войти заново. Приносим свои извенения');
    }

    return token;
};
