const serviceTasksDB = require('../../serviceMongo/serviceTasks/serviceTasksDB');

module.exports = async(req,res,next) => {
    const { id,task } = req.body;

    try {
        await serviceTasksDB.checkHasTask(id,task);
        req.body = {
            id,
            task,
        };
        next();
    }
    catch (error) {
        next(error);
    }
};


