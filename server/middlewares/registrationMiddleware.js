const serviceAuthDB = require('../serviceMongo/serviceAuthDB');

module.exports = async(req,res,next) => {

    try {
        const { email,nickname } = req.body;

        await serviceAuthDB.checkEmail(email);

        await serviceAuthDB.checkNickmane(nickname);

        next();
    }
    catch (error) {
        next(error);
    }
};
