const User = require('../modelsMongo/User');
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../token/generateToken');



class AuthController {
  async registration(req, res) {
    try {
      const errValidation = validationResult(req);
      if (!errValidation.isEmpty()) {
        return res.status(400).json({ message: 'Некоректные данные' });
      }

      const { email, country, nickname, password } = req.body;

      const hasEmail = await User.findOne({ email });
      if (hasEmail) {
        return res.status(400).json({ message: 'Пользователь c таким email уже существует' });
      }

      const hasNickname = await User.findOne({ nickname });
      if (hasNickname) {
        return res.status(400).json({ message: 'Пользователь c таким nickname уже существует' });
      }
      const hashPassword = bcrypt.hashSync(password, 6);

      const user = new User({
        email,
        country,
        nickname,
        isAuth: false,
        password: hashPassword,
        balance: 0,
        income: 0,
        incomeOperations: [],
        spending: 0,
        spendingOperations: [],
        accumulation: 0,
        accumulationOperations: [],
        categories: [],
        tasks: [],
      });

      await user.save(user);

      res.json({message:'Профиль успешно создан'});
    } catch (error) {
      res.status(400).json({ message: 'Regeeee error' });
    }
  }

  async login(req, res) {
    try {
      const errValidation = validationResult(req);
      if (!errValidation.isEmpty()) {
        return res.status(400).json({ message: 'Некоректные данные' });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'Данного пользователя не существует' });
      }

      await User.updateOne({ _id: user._id }, { $set: { isAuth: true } });

      const correctPassword = bcrypt.compareSync(password, user.password);

      if (!correctPassword) {
        return res.status(400).json({ message: 'Пароль неверный. Попробуйте ещё раз.' });
      }

      const token = generateAccessToken(user._id);
       res.json({ user, token });
    } catch (error) {
      return res.status(400).json({ message: 'Log err' });
    }
  }

  async auth(req, res) {
    try {
     const user = await User.findOne({_id: req.user.id})
       const token = generateAccessToken(user._id);
       res.json({token,user})
    } catch (error) {
      return res.status(400).json({ message: 'Log err' });
    }
  }

  async logout(req,res) {
    try {
       const { id } = req.body
       await User.updateOne({ _id: id }, { $set: { isAuth: false } });
       res.json({message: 'Вы вышли из системы'})
    } catch (error) {
      return res.status(400).json({message: 'Что-то пошло не так'})
    }
  }
}

module.exports = new AuthController();
