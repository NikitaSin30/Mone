

module.exports = class ApiError extends Error {

    constructor(status,message) {
        super(message);
        this.status = status;
    }

    static createBadRequestError(message) {
        return new ApiError(400, message);
    }

    static createUnauthorizedError(message) {
        return new ApiError(401, message);
    }

};
