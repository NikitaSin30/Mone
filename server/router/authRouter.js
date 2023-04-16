const Router  = require('express');
const router = new Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const middlewareAuth = require('../middlewares/middlewareAuth');
const middlewareReg = require('../middlewares/middlewareReg');



router.post('/registration',
    [
        check('email', 'Некорректны email').isString().isEmail(),
        check('password','Минимальная длина 6 символов').isString().isLength({ min: 6 }),
        check('nickname','Минимальная длина 3 символа').isString().isLength({ min: 3 }),
    ],
    middlewareReg ,
    authController.registration);


router.post('/login',
    [
        check('email', 'Некорректны email').isString().isEmail(),
        check('password','Минимальная длина 6 символов').isString().isLength({ min: 6 }),
    ],
    authController.login);

router.post('/logout', authController.logout);

router.get('/authentication', middlewareAuth, authController.authentication);


module.exports = router;
