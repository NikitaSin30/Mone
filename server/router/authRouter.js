const Router  = require('express');
const router = new Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');

router.post('/registration', authController.registration);
router.post('/login', authController.login);



module.exports = router;
