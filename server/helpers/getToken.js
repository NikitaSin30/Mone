const ApiError = require('../apiError/ApiError');

module.exports = (headers) => {
    const token = headers.split(' ')[1];

    if (!token) {
        return ApiError.createUnauthorizedError('Вам нужно ввести логин и пароль');
    }

    return token;
};
