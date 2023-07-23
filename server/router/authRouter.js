const Router  = require('express');
const router = new Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const registrationMiddleware = require('../middlewares/registrationMiddleware');



router.post('/registration',
    [
        check('email', 'Некорректны email').isString().isEmail(),
        check('password','Минимальная длина 6 символов').isString().isLength({ min: 6 }),
        check('nickname','Минимальная длина 3 символа').isString().isLength({ min: 3 }),
    ],
    registrationMiddleware,
    authController.registration);


router.post('/login',
    [
        check('email', 'Некорректны email').isString().isEmail(),
        check('password','Минимальная длина 6 символов').isString().isLength({ min: 6 }),
    ],
    authController.login);

router.post('/logout', authController.logout);

router.get('/authentication', authMiddleware, authController.authenticate);


module.exports = router;
