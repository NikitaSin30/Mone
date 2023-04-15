

module.exports = class ApiError extends Error {

    constructor(status,message) {
        super(message);
        this.status = status;
    }

    static badRequest(message) {
        return new ApiError(400, message);
    }

    static unauthorized(message) {
        return new ApiError(401, message);
    }

};
