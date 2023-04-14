const User = require('../modelsMongo/User');
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../token/generateToken');
const serviceAuthDB = require('../serviceMongo/serviceAuthDB');
const ApiError = require('../apiError/ApiError');


class AuthController {
    async registration(req, res,next) {
        try {
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
            const { email, password } = req.body;
            const user = await serviceAuthDB.findUser(email);

            const correctPassword = bcrypt.compareSync(password, user.password);

            if (!correctPassword) {
                throw ApiError.notCorrectPassword('Пароль неверный');
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
}

module.exports = new AuthController();
