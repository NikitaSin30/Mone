const serviceTasksDB = require('../../serviceMongo/serviceTasks/serviceTasksDB');

module.exports = async(req,res,next) => {
    const { userID,task } = req.body;

    try {
        await serviceTasksDB.checkHasTask(userID,task);

        next();
    }
    catch (error) {
        next(error);
    }
};
