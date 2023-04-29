const Router = require('express');
const router = new Router();
const tasksController = require('../controllers/tasksController');
const middlewareAddTask = require('../middlewares/tasksMiddleware/middlewareAddTask');

router.post('/addtask', middlewareAddTask ,tasksController.addTask);


module.exports = router;

