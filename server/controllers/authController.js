const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../token/generateToken');
const serviceAuthDB = require('../serviceMongo/serviceAuthDB');
const ApiError = require('../apiError/ApiError');
const checkValidation = require('../helpers/checkValidation');
const checkCorrectPassword = require('../helpers/checkCorrectPasword');



class AuthController {

    async registration(req, res,next) {
        try {

            checkValidation(req);

            const { email,country,nickname,password } = req.body;

            const hashPassword = bcrypt.hashSync(password,7);

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

        const { idUser } = req.user;

        try {
            const user = await serviceAuthDB.authenticate(idUser);
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

        const { id } = req.body;

        try {
            await serviceAuthDB.logout(id);

            res.json({ message: 'Вы вышли из системы' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new AuthController();
