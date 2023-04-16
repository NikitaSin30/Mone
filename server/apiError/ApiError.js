

module.exports = class ApiError extends Error {

    constructor(status,message) {
        super(message);
        this.status = status;
    }

    static throwBadRequestError(message) {
        return new ApiError(400, message);
    }

    static trowUnauthorizedError(message) {
        return new ApiError(401, message);
    }

};
