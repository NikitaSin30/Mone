const serviceTasksDB = require('../serviceMongo/serviceTasks/serviceTasksDB');

class TasksController {
    async addTask(req,res,next) {
        const { task, id } = req.body;

        try {
            await serviceTasksDB.addTask(id,task);
            res.json({ message: 'Задача добавлена' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new TasksController();
