const serviceAuthDB = require('../serviceMongo/serviceAuthDB');

const registrationMiddleware = async(req,res,next) => {

    try {
        const { email,nickname } = req.body;

        await serviceAuthDB.checkEmail(email);
        await serviceAuthDB.checkNickname(nickname);

        next();
    }
    catch (error) {
        next(error);
    }
};

module.exports = registrationMiddleware;
