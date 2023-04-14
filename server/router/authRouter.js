const Router  = require('express');
const router = new Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const midlewareReg = require('../midlewares/midlewareReg');

router.post('/registration',midlewareReg ,authController.registration);
router.post('/login', authController.login);

module.exports = router;
