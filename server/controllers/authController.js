const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../token/generateToken');
const serviceAuthDB = require('../serviceMongo/serviceAuthDB');
const ApiError = require('../apiError/ApiError');


class AuthController {

    async registration(req, res,next) {
        try {

            const errValidation = validationResult(req);

            if (!errValidation.isEmpty()) {
                return ApiError.badRequest('Некоректно введённые данные');
            }

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
            const errValidation = validationResult(req);

            if (!errValidation.isEmpty()) {
                return ApiError.badRequest('Некоректные данные');
            }

            const { email, password } = req.body;
            const user = await serviceAuthDB.findUser(email);

            const correctPassword = bcrypt.compareSync(password, user.password);

            if (!correctPassword) {
                throw ApiError.unauthorized('Пароль неверный');
            }

            const token = generateAccessToken(user._id, user.email);

            return res.json({
                user,
                token,
            });

        }
        catch (error) {
            next(error);
        }
    }


    async auth(req, res,next) {

        const { id } = req.user;

        try {
            const user = await serviceAuthDB.auth(id);
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
