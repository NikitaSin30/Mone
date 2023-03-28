const Router  = require('express');
const router = new Router();
const controller = require('../controllers/authController');
const { check } = require('express-validator');

router.post('/registration', controller.registration);
router.post('/login', controller.login);

// router.get('/user' , controller.getUser);

module.exports = router;
