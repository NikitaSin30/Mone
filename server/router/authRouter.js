const Router  = require('express');
const router = new Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const midlewareAuth = require('../midlewares/midlewareAuth');
const midlewareReg = require('../midlewares/midlewareReg');



router.post('/registration',
    [
        check('email', 'Некорректны email').isString().isEmail(),
        check('password','Минимальная длина 6 символов').isString().isLength({ min: 6 }),
        check('nickname','Минимальная длина 3 символа').isString().isLength({ min: 3 }),
    ],
    midlewareReg ,
    authController.registration);


router.post('/login',
    [
        check('email', 'Некорректны email').isString().isEmail(),
        check('password','Минимальная длина 6 символов').isString().isLength({ min: 6 }),
    ],
    authController.login);

router.post('/out', authController.logout);

router.get('/auth', midlewareAuth, authController.auth);


module.exports = router;
