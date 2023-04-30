const serviceAuthDB = require('../serviceMongo/serviceAuthDB');

const middlewareReg = async(req,res,next) => {

    try {
        const { email,nickname,country,password } = req.body;

        await serviceAuthDB.checkEmail(email);

        await serviceAuthDB.checkNickmane(nickname);

        req.body = {
            email,
            nickname,
            country,
            password,
        };

        next();
    }
    catch (error) {
        next(error);
    }
};

module.exports = middlewareReg;