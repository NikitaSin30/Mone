const User = require('../modelsMongo/User');
const CashFlow = require('../modelsMongo/CashFlow')
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../token/generateToken');



class authController {
    async registration(req, res) {
        try {
            const {email,country,nickname,password } = req.body;
            const conditate = await User.findOne({ email });

            if (conditate) {
                return res.status(400).json({ message: 'Пользователь уже существует' });
            }
            const hashPassword = bcrypt.hashSync(password,6);
            const user = new User({
                email,
                country,
                nickname,
                password : hashPassword,
            });
            const cashFlow = new CashFlow({
            balance : 0,
            income : 0,
            incomeOperations : {},
            accumulation : 0,
            accumulationOperations : {},
            spending : 0,
            spendingOperations   : {},
            })

            await user.save(user);
            await cashFlow.save(cashFlow)

            const createdUser = await User.findOne({ email })
            
            return res.json({ createdUser });
        }
        catch (error) {
            res.status(400).json({ message: 'Regeeee error' });
        }
    }


    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: 'Данного пользователя не существует' });
            }

            const correctPassword = bcrypt.compareSync(password, user.password);

            if (!correctPassword) {
                return res.status(400).json({ message: 'Пароль неверный. Попробуйте ещё раз.' });
            }


            const token = generateAccessToken(user._id, user.email);
                return res.json({user,token})

        }
        catch (error) {
           return res.status(400).json({ message: 'Log err' });
        }
    }
    async getUser(res,user) {
        try {
           return res.json(user);
        }
        catch (error) {
         res.json('ошибка')
        }
    }
}

module.exports = new authController();
