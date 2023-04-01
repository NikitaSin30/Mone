const User = require('../modelsMongo/User');
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../token/generateToken');



class AuthController {
    async registration(req, res) {
        try {
            const {email,country,nickname,password } = req.body;

            const hasEmail = await User.findOne({ email });
            if (hasEmail) {
              return res.status(400).json({ message: 'Пользователь c таким email уже существует' });
            }

            const hasNickname = await User.findOne({ nickname });
            if (hasNickname) {
              return res.status(400).json({ message: 'Пользователь c таким nickname уже существует' });
            }
            const hashPassword = bcrypt.hashSync(password,6);

              const user = new User({
                email,
                country,
                nickname,
                password: hashPassword,
                balance:0,
                income:0,
                incomeOperations:[],
                spending:0,
                spendingOperations:[],
                accumulation: 0,
                accumulationOperations:[],
                categories:[],
                tasks:[]
              });

            const saved = await user.save(user);
            const createdUser = await User.findOne(saved._id);

            const newUser = {
              email: createdUser.email,
              country: createdUser.country,
              nickname: createdUser.nickname,
              password: createdUser.password,
              _id: createdUser._id,
            };

            return res.json(newUser);
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
}

module.exports = new AuthController();
