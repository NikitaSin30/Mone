const User = require('../modelsMongo/User');
const ApiError = require('../apiError/ApiError');

class ServiceAuthDB {

    constructor(model) {
        this.DB = model;
    }

    async findUser(email) {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                throw ApiError.createUnauthorizedError(`Пользователя c email: ${email} не существует`);
            }

            return user;
        }
        catch (error) {
            throw error;
        }
    }

    async checkEmail(email) {
        try {

            const hasEmail = await User.findOne( { email } );

            if (hasEmail) {
                throw ApiError.createBadRequestError(`Пользователь c email: ${email} уже существует`);
            }
        }
        catch (error) {
            throw error;
        }
    }

    async checkNickname(nickname) {
        try {
            const hasNickname = await User.findOne({ nickname });

            if (hasNickname) {
                throw ApiError.createBadRequestError(`Пользователь c nickname: ${nickname} уже существует`);
            }
        }
        catch (error) {
            throw error;

        }
    }

    async saveUser(email,country, nickname,hashPassword) {
        try {
            const user = new User({
                email,
                country,
                nickname,
                password               : hashPassword,
                balance                : 0,
                income                 : 0,
                incomeOperations       : [],
                spending               : 0,
                spendingOperations     : [],
                accumulation           : 0,
                accumulationOperations : [],
                allOperations          : [],
                categories             : [],
                tasks                  : [],
            });

            await user.save(user);
        }
        catch (error) {
            throw error;
        }

    }

    async logout(idUser) {
        try {
            await User.updateOne({ _id: idUser }, { $set: { isAuth: false } });
        }
        catch (error) {
            throw error;
        }
    }

    async authenticate(idUser) {
        try {
            const user = await User.findOne({ _id: idUser });

            return user;
        }
        catch (error) {
            throw ApiError.createUnauthorizedError('Необходимо ввести почту и пароль');
        }
    }
}


module.exports = new ServiceAuthDB(User);
