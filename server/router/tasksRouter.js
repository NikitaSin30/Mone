const Router = require('express');
const router = new Router();
const tasksController = require('../controllers/tasksController');
const addTaskMiddleware = require('../middlewares/tasksMiddleware/addTaskMiddleware');

router.post('/addtask', addTaskMiddleware ,tasksController.addTask);


module.exports = router;
