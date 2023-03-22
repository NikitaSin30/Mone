const User = require('./models/User');
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('./generateToken');



class authController {
    async registration(req, res) {
        try {
            const { firstName,phoneNumber,email,country,nickName,password } = req.body;
            const conditate = await User.findOne({ email });

            if (conditate) {
                return res.status(400).json({ message: 'Пользователь уже существует' });
            }
            const hashPassword = bcrypt.hashSync(password,6);
            const user = new User({
                firstName,
                phoneNumber,
                email,
                country,
                nickName,
                password : hashPassword,
            });

            await user.save(user);

            return res.json({ message: 'Пользователь был создан' });
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Reg error' });
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

            return res.json({ token });
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Log err' });

        }
    }
    async getUser(req,res) {
        try {
            const users = await User.find();

            res.json(users);
        }
        catch (error) {

        }
    }
}

module.exports = new authController();
