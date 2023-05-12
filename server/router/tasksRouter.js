const Router = require('express');
const router = new Router();
const tasksController = require('../controllers/tasksController');
const addTaskMiddleware = require('../middlewares/tasksMiddleware/addTaskMiddleware');




router.delete('/deltask',tasksController.deleteTask);
router.delete('/delalltasks',tasksController.deleteAllTasks);
router.put('/switchisdone',tasksController.switchIsDone);
router.post('/addtask', addTaskMiddleware ,tasksController.addTask);


module.exports = router;
