const jwt = require('jsonwebtoken');
const ApiError = require('../apiError/ApiError');
const { secret } = require('../token/config');



const midlewareAuth = (req, res , next) => {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return ApiError.unauthorized('Вам нужно ввести логин и пароль');
        }
        const decoded = jwt.verify(token, 'secret');

        req.user = decoded;
        next();
    }
    catch (error) {
        next(error);
    }
};

module.exports = midlewareAuth;
