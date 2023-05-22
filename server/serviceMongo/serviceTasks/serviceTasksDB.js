const ApiError = require('../../apiError/ApiError');
const User = require('../../modelsMongo/User');



class ServiceTasksDB {

    async addTask(id, task) {
        try {
            await User.updateOne({ _id: id }, { $push: { tasks: task } });
        }
        catch (error) {
            throw error;
        }
    }

    async checkHasTask(id,task) {

        try {
            const user = await User.findOne({ _id: id });
            const hasTask = user.tasks.find(item => item.task === task.task);

            if (hasTask) {
                throw ApiError.createBadRequestError('Задача уже есть в списке дел');
            }
        }
        catch (error) {
            throw error;
        }
    }
    async deleteTask(id,idTask) {
        try {
            await User.updateOne({ _id: id }, { $pull: { tasks: { id: idTask } } });

        }
        catch (error) {
            throw error;
        }
    }

    async deleteAllTasks(id) {
        try {
            await User.updateOne({ _id: id }, { $unset: { tasks: [] } });
        }
        catch (error) {
            throw error;
        }
    }
    async switchIsDone(id, idTask) {
        try {

            // await User.updateOne({
            //     _id  : id,
            //     task : idTask,
            // }, {
            //     $set : { isDone: true },
            // } );
            const user = await User.findOne({ _id: id });
            const task = user.tasks.find(item => item.id === idTask);

            await User.updateOne(
                {
                    _id   : id,
                    tasks : { $elemMatch: { id: idTask } }, 
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
