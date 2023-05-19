const { validationResult } = require('express-validator');
const ApiError = require('../apiError/ApiError');

module.exports = (req) => {
    const errValidation = validationResult(req);

    if (!errValidation.isEmpty()) {
        return ApiError.createBadRequestError('Некоректно введённые данные');
    }
};
