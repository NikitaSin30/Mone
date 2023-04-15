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
                throw ApiError.unauthorized(`Пользователя c email: ${email} не существует`);
            }

            return user;
        }
        catch (error) {
            throw error;
        }
    }

    async checkEmail(email) {
        try {

            const hasEmail = await this.DB.findOne({ email });

            if (hasEmail) {
                throw ApiError.badRequest(`Пользователь c email: ${email} уже существует`);
            }
        }
        catch (error) {
            throw error;
        }
    }

    async checkNickmane(nickname) {
        try {
            const hasNickname = await this.DB.findOne({ nickname });

            if (hasNickname) {
                throw ApiError.badRequest(`Пользователь c nickname: ${nickname} уже существует`);
            }
        }
        catch (error) {
            throw error;

        }
    }

    async saveUser(email,country, nickname,hashPassword) {
        try {
            const user =  new this.DB({
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
                categories             : [],
                tasks                  : [],
            });

            await user.save(user);
        }
        catch (error) {
            throw error;
        }

    }

    async logout(id) {
        try {
            await User.updateOne({ _id: id }, { $set: { isAuth: false } });
        }
        catch (error) {
            throw error;
        }
    }

    async auth(id) {
        try {
            const user = await User.findOne({ _id: id });

            return user;
        }
        catch (error) {
            throw ApiError.unauthorized('Необходимо ввести почту и пароль');
        }
    }
}


module.exports = new ServiceAuthDB(User);
