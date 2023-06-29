const ApiError = require('../../apiError/ApiError');
const User = require('../../modelsMongo/User');
const decoratorIDandDate = require('../decorator/decoratorID');


class ServiceTasksDB {

    async addTask(userID, task) {
        try {
            const modifiedTask = decoratorIDandDate(task);

            await User.updateOne({ _id: userID }, { $push: { tasks: modifiedTask } });

            return modifiedTask;
        }
        catch (error) {
            throw error;
        }
    }

    async checkHasTask(userID,task) {

        try {
            const user = await User.findOne({ _id: userID });
            const hasTask = user.tasks.find(item => item.task === task.task);

            if (hasTask) {
                throw ApiError.createBadRequestError('Задача уже есть в списке дел');
            }
        }
        catch (error) {
            throw error;
        }
    }
    async deleteTask(userID,taskID) {
        try {
            await User.updateOne({ _id: userID }, { $pull: { tasks: { id: taskID } } });

        }
        catch (error) {
            throw error;
        }
    }

    async deleteAllTasks(userID) {
        try {
            await User.updateOne({ _id: userID }, { $unset: { tasks: [] } });
        }
        catch (error) {
            throw error;
        }
    }
    async switchIsDone(userID, taskID) {
        try {

            const user = await User.findOne({ _id: userID });
            const task = user.tasks.find(item => item.id === taskID);

            await User.updateOne(
                {
                    _id        : userID,
                    'tasks.id' : taskID ,
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
