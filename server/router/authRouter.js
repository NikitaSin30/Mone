const Router  = require('express');
const router = new Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const  midlewareAuth = require('../midleware/midlewareAuth')

router.post('/registration',
[
    check('email', 'Некорректны email').isEmail(),
    check('password','Минимальная длина 6 символоф').isLength({min:6})
],
authController.registration);

router.post('/login',
[
    check('email', 'Некорректны email').isEmail(),
    check('password','Минимальная длина 6 символоф').isLength({min:6})
],
authController.login);

router.post('/out', authController.logout);

router.get('/auth', midlewareAuth, authController.auth)


module.exports = router;
