const ApiError = require('../../apiError/ApiError');
const User = require('../../modelsMongo/User');



class ServiceTasksDB {

    async addTask(idUser, task) {
        try {
            await User.updateOne({ _id: idUser }, { $push: { tasks: task } });
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
            await User.updateOne({ _id: idUser }, { $pull: { tasks: { id: idTask } } });
        }
        catch (error) {
            throw error;
        }
    }
}


module.exports = new ServiceTasksDB();
