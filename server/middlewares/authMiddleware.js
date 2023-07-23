const jwt = require('jsonwebtoken');
const ApiError = require('../apiError/ApiError');
const getToken = require('../helpers/getToken');
const { secret } = require('../token/config');



module.exports = (req, res , next) => {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        const token = getToken(req.headers.authorization);

        const decoded = jwt.verify(token, 'secret');

        req.user = decoded;
        
        next();
    }
    catch (error) {
        next(error);
    }
};
