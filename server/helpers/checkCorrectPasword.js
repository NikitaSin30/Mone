const bcrypt = require('bcryptjs');
const ApiError = require('../apiError/ApiError');


module.exports = (inputPassword, dbPassword) => {
    const correctPassword = bcrypt.compareSync(inputPassword, dbPassword);

    if (!correctPassword) {
        throw ApiError.trowUnauthorizedError('Пароль неверный');
    }
};
