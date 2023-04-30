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

    async deleteTask(req,res,next) {
        const { id,idTask } = req.body;

        try {
            await serviceTasksDB.deleteTask(id,idTask);
            res.json({ message: 'Задача удалена' });
        }
        catch (error) {
            next(error);
        }
    }

    async deleteAllTasks(req,res,next) {
        const { id } = req.body;

        try {
            await serviceTasksDB.deleteAllTasks(id);
            res.json({ message: 'Все задачи удалены' });
        }
        catch (error) {
            next(error);
        }
    }
    async switchIsDone(req,res,next) {
        const { id,idTask } = req.body;

        try {
            await serviceTasksDB.switchIsDone(id,idTask);
            res.json({ message: 'Статус выполнения задачи изменен' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new TasksController();
