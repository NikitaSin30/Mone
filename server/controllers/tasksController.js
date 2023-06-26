const serviceTasksDB = require('../serviceMongo/serviceTasks/serviceTasksDB');

class TasksController {
    async addTask(req,res,next) {
        const { task, userID } = req.body;

        try {
            await serviceTasksDB.addTask(userID,task);
            res.json({ message: 'Задача добавлена' });
        }
        catch (error) {
            next(error);
        }
    }

    async deleteTask(req,res,next) {
        const { userID,taskID } = req.body;

        try {
            await serviceTasksDB.deleteTask(userID,taskID);
            res.json({ message: 'Задача удалена' });
        }
        catch (error) {
            next(error);
        }
    }

    async deleteAllTasks(req,res,next) {
        const { userID } = req.body;


        try {
            await serviceTasksDB.deleteAllTasks(userID);
            res.json({ message: 'Все задачи удалены' });
        }
        catch (error) {
            next(error);
        }
    }
    async switchIsDone(req,res,next) {
        const { idUser,idTask } = req.body;

        try {
            await serviceTasksDB.switchIsDone(idUser,idTask);
            res.json({ message: 'Статус выполнения задачи изменен' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new TasksController();
