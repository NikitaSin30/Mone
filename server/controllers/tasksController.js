const serviceTasksDB = require('../serviceMongo/serviceTasks/serviceTasksDB');

class TasksController {
    async addTask(req,res,next) {
        const { task, userID } = req.body;

        try {
            const modifiedTask =  await serviceTasksDB.addTask(userID,task);

            res.json({
                data    : modifiedTask ,
                message : 'Задача добавлена',
                success : true,
            });
        }
        catch (error) {
            next(error);
        }
    }

    async deleteTask(req,res,next) {
        const { userID,taskID } = req.body;

        try {
            await serviceTasksDB.deleteTask(userID,taskID);
            res.json({
                message : 'Задача удалена',
                success : true,
            });
        }
        catch (error) {
            next(error);
        }
    }

    async deleteAllTasks(req,res,next) {
        const { userID } = req.body;


        try {
            await serviceTasksDB.deleteAllTasks(userID);
            res.json({
                message : 'Все задачи удалены',
                success : true,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async switchIsDone(req,res,next) {
        const { idUser,idTask } = req.body;

        try {
            await serviceTasksDB.switchIsDone(idUser,idTask);
            res.json({
                message : 'Статус выполнения задачи изменен',
                success : true,
            });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new TasksController();
