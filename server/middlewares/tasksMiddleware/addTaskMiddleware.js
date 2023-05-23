const serviceTasksDB = require('../../serviceMongo/serviceTasks/serviceTasksDB');

module.exports = async(req,res,next) => {
    const { idUser,task } = req.body;

    try {
        await serviceTasksDB.checkHasTask(idUser,task);

        next();
    }
    catch (error) {
        next(error);
    }
};
