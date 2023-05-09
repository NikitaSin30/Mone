const ServiceCashDB = require('../serviceMongo/seviceCashDB');

class CashFlowController {

    async addIncome(req, res,next) {
        const { incomeOperation, id } = req.body;

        try {
            const incomeOperationWithID  = await ServiceCashDB.addIncome(incomeOperation,id);

            res.json({
                incomeOperationWithID ,
                message : 'Доход добавлен',
            });
        }
        catch (error) {
            next(error);
        }
    }

    async addSpending(req, res,next) {
        const { id, spendingOperation } = req.body;

        try {
            const spendingOperationWithID = await ServiceCashDB.addSpending(spendingOperation,id);

            res.json({
                spendingOperationWithID,
                message : 'Расход добавлен',
            });
        }
        catch (error) {
            next(error);
        }
    }
    async addAccumulation(req, res,next) {
        const { accumulationOperation,id } = req.body;

        try {
            const accumulationOperationWithID =  await ServiceCashDB.addAccumulation(accumulationOperation,id);

            res.json({
                accumulationOperationWithID,
                message : 'Накопление добавлено',
            });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CashFlowController();
