const ApiError = require('../../apiError/ApiError');
const User = require('../../modelsMongo/User');
const decoratorID = require('../decorator/decoratorID');


class ServiceTasksDB {

    async addTask(idUser, task) {
        try {
            const modifiedTask = decoratorID(task);

            await User.updateOne({ _id: idUser }, { $push: { tasks: modifiedTask } });

            return modifiedTask;
        }
        catch (error) {
            throw error;
        }
    }

    async checkHasTask(idUser,task) {

        try {
            const user = await User.findOne({ _id: idUser });
            const hasTask = user.tasks.find(item => item.task === task.task);

            if (hasTask) {
                throw ApiError.createBadRequestError('Задача уже есть в списке дел');
            }
        }
        catch (error) {
            throw error;
        }
    }
    async deleteTask(idUser,idTask) {
        try {
            await User.updateOne({ _id: idUser }, { $pull: { tasks: { id: idTask } } });

        }
        catch (error) {
            throw error;
        }
    }

    async deleteAllTasks(idUser) {
        try {
            await User.updateOne({ _id: idUser }, { $unset: { tasks: [] } });
        }
        catch (error) {
            throw error;
        }
    }
    async switchIsDone(idUser, idTask) {
        try {

            const user = await User.findOne({ _id: idUser });
            const task = user.tasks.find(item => item.id === idTask);

            await User.updateOne(
                {
                    _id        : idUser,
                    'tasks.id' : idTask ,
                },
                { $set: { 'tasks.$.isDone': !task.isDone } }
            );

        }
        catch (error) {
            throw error;
        }
    }
}


module.exports = new ServiceTasksDB();
