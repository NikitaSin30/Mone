const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../token/generateToken');
const serviceAuthDB = require('../serviceMongo/serviceAuthDB');
const checkValidation = require('../helpers/checkValidation');
const checkCorrectPassword = require('../helpers/checkCorrectPasword');



class AuthController {

    async registration(req, res,next) {
        try {

            checkValidation(req);

            const { email,country,nickname,password } = req.body;

            const hashPassword = bcrypt.hashSync(password,6);

            await serviceAuthDB.saveUser(email,country,nickname,hashPassword);

            res.json({ message: 'Учётная запись была создана' });
        }
        catch (error) {
            next(error);
        }
    }


    async login(req, res,next) {

        try {

            checkValidation(req);

            const { email, password } = req.body;
            const user = await serviceAuthDB.findUser(email);

            checkCorrectPassword(password,user.password);

            const token = generateAccessToken(user._id, user.email);

            res.json({
                user,
                token,
            });

        }
        catch (error) {
            next(error);
        }
    }


    async authenticate(req, res,next) {

        const { userID } = req.user;

        try {
            const user = await serviceAuthDB.authenticate(userID);
            const token = generateAccessToken(user._id);

            res.json({
                token,
                user,
            });
        }
        catch (error) {
            next(error);
        }
    }

    async logout(req,res, next) {

        const { userID } = req.body;

        try {
            await serviceAuthDB.logout(userID);

            res.json({ message: 'Вы вышли из системы' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new AuthController();
